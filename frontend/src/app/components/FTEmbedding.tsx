'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import * as d3 from 'd3';

// New inline component to render a chart for a given word vector
const WordChart = ({ label, vector }: { label: string; vector: number[] }) => {
    const chartRef = useRef<SVGSVGElement | null>(null);
    useEffect(() => {
        if (!vector || !chartRef.current) return;
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove();
        const width = 600, height = 300;
        svg.attr("width", width).attr("height", height);
        const xScale = d3.scaleLinear()
            .domain([0, vector.length - 1])
            .range([40, width - 20]);
        const yExtent = d3.extent(vector) as [number, number];
        const yScale = d3.scaleLinear()
            .domain(yExtent)
            .range([height - 30, 20]);
        const line = d3.line<number>()
            .x((d, i) => xScale(i))
            .y(d => yScale(d));
        svg.append("path")
            .datum(vector)
            .attr("fill", "none")
            .attr("stroke", "teal")
            .attr("stroke-width", 2)
            .attr("d", line);
        svg.append("g")
            .attr("transform", `translate(0, ${height - 30})`)
            .call(d3.axisBottom(xScale));
        svg.append("g")
            .attr("transform", "translate(40,0)")
            .call(d3.axisLeft(yScale));
    }, [vector]);
    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold text-center">{label}</h3>
            <svg className="border" ref={chartRef}></svg>
        </div>
    );
};

const FTEmbeddingComponent = () => {
    // Change state to hold embeddings mapping (word -> vector)
    const [embeddings, setEmbeddings] = useState<{ [key: string]: number[] } | null>(null);
    const [inputText, setInputText] = useState("");
    
    const mutation = useMutation({
        mutationFn: async (text: string) => {
            const response = await axios.post('http://127.0.0.1:8000/api/embedding/fasttext', { text });
            return response.data;
        },
        // Store the entire embeddings object rather than a single key
        onSuccess: (data: { embeddings: { [key: string]: number[] } }) => {
            setEmbeddings(data.embeddings);
            // console.log('Word2Vec Embeddings:', data.embeddings);
        },
        onError: (error: Error) => {
            console.error('Error fetching FastText embedding:', error);
        }
    });

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Generate Embedding using FastText
            </h2>
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
            {embeddings && (
                <div className="mt-8">
                    {/* Iterate over every key in embeddings */}
                    {Object.entries(embeddings).map(([word, vector]) => (
                        <WordChart key={word} label={word} vector={vector} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FTEmbeddingComponent;