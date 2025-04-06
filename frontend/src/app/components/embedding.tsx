'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios'; // added axios import
import * as d3 from 'd3';

const EmbeddingComponent = () => {
    const [embedding, setEmbedding] = useState<number[] | null>(null);
    const [inputText, setInputText] = useState("");
    const svgRef = useRef<SVGSVGElement | null>(null);

    // Updated mutation using axios.post and improved error handling
    const mutation = useMutation({
        mutationFn: async (text: string) => {
            const response = await axios.post('http://127.0.0.1:8000/api/embedding/bert', { text });
            return response.data;
        },
        onSuccess: (data: { embedding: number[] }) => {
            setEmbedding(data.embedding);
        },
        onError: (error: Error) => {
            console.error('Error fetching embedding:', error);
        }
    });

    useEffect(() => {
        if (!embedding || !svgRef.current) return;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // clear previous drawing

        const width = 600, height = 300;
        svg.attr("width", width).attr("height", height);

        // X scale: index of each embedding value
        const xScale = d3.scaleLinear()
            .domain([0, embedding.length - 1])
            .range([40, width - 20]);
        // Y scale: embedding value range
        const yExtent = d3.extent(embedding) as [number, number];
        const yScale = d3.scaleLinear()
            .domain(yExtent)
            .range([height - 30, 20]);

        // Generate line path
        const line = d3.line<number>()
            .x((d, i) => xScale(i))
            .y(d => yScale(d));

        svg.append("path")
            .datum(embedding)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", line);

        // Add x-axis
        svg.append("g")
            .attr("transform", `translate(0, ${height - 30})`)
            .call(d3.axisBottom(xScale));

        // Add y-axis
        svg.append("g")
            .attr("transform", "translate(40,0)")
            .call(d3.axisLeft(yScale));
    }, [embedding]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Generate Embedding using BERT</h2>
            <div className="space-y-4">
                <input 
                    type="text" 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your text here"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={() => mutation.mutate(inputText)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Send Request
                </button>
            </div>
            {mutation.isPending && <p className="text-center mt-4">Loading...</p>}
            {mutation.isError && <p className="text-center mt-4 text-red-500">Error fetching embedding.</p>}
            {embedding && 
                <div className="mt-8 flex justify-center">
                    <svg className="border" ref={svgRef}></svg>
                </div>
            }
        </div>
    );
};

export default EmbeddingComponent;