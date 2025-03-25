"use client"
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import { useMutation } from '@tanstack/react-query';

// Define response data types
interface TokenizeData {
  title: string;
  tokens: { [key: string]: number };
  language: string;
}
interface TokenizeResponse {
  results: TokenizeData[];
}
interface StopwordData {
  title: string;
  words: { [key: string]: number };
  language: string;
}
interface StemResult {
  title: string;
  words: { [key: string]: number };
  language: string;
  labialized: { [key: string]: number };
  shortened: { [key: string]: number };
  punctuation: { [key: string]: number };
}
interface StemResponse {
  results: StemResult[];
  posting_list: { [key: string]: { title: string; frequency: number }[] };
}

// Add new types if needed
interface DocumentInput {
  title: string;
  original_text: string;
  language: string; // newly added field
}

// Add new type for stopword response
interface StopwordResponse {
  results: {
    title: string;
    words: { [key: string]: number };
    language: string;
  }[];
}

const UploadDocument = () => {
  const [language, setLanguage] = useState('en');
  // Remove old title and text states
  // New state for number of documents and their inputs
  const [docCount, setDocCount] = useState(1);
  const [documents, setDocuments] = useState<DocumentInput[]>([{ title: '', original_text: '', language: 'en' }]);
  const [tokenizeData, setTokenizeData] = useState<TokenizeResponse | null>(null);
  const [stopwordData, setStopwordData] = useState<StopwordResponse | null>(null);
  const [stemData, setStemData] = useState<StemResponse | null>(null);
  const [fileCount, setFileCount] = useState(1);
  const [files, setFiles] = useState<(File | null)[]>([null]);
  const [uploadMode, setUploadMode] = useState("text");

  const tokenRef = useRef<HTMLDivElement>(null);
  const stopwordRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const labializedRef = useRef<HTMLDivElement>(null);
  const shortenedRef = useRef<HTMLDivElement>(null);
  const punctuationRef = useRef<HTMLDivElement>(null);

  const renderTable = (
      containerRef: React.RefObject<HTMLDivElement | null>,
      data: { [key: string]: number },
      headerLabel: string
    ) => {
    const container = d3.select(containerRef.current);
    container.selectAll('*').remove();
    const table = container.append('table').style('border-collapse', 'collapse').style('width', '100%');
    const thead = table.append('thead');
    const tbody = table.append('tbody');

    thead.append('tr')
      .selectAll('th')
      .data(['Word', headerLabel])
      .enter()
      .append('th')
      .text((d: string) => d)
      .style('border', '1px solid #ccc')
      .style('padding', '8px')
      .style('background-color', '#f2f2f2');

    const rows = tbody.selectAll('tr')
      .data(Object.entries(data))
      .enter()
      .append('tr');
    
    rows.selectAll('td')
      .data(d => d)
      .enter()
      .append('td')
      .text(d => d)
      .style('border', '1px solid #ccc')
      .style('padding', '8px');
  };

  // Update tokenizeMutation to send documents array instead of a single document
  const tokenizeMutation = useMutation<TokenizeResponse, Error, void, unknown>({
    mutationFn: async () => {
      const response = await axios.post<TokenizeResponse>('http://127.0.0.1:8000/api/documents/tokenize', {
        documents
      });
      return response.data;
    },
    onSuccess: (data: TokenizeResponse) => {
      setTokenizeData(data);
    }
  });

  // Modify stopwordMutation to send the proper payload using the tokenize response's results
  const stopwordMutation = useMutation<StopwordResponse, Error, void, unknown>({
    mutationFn: async () => {
      const response = await axios.post<StopwordResponse>('http://127.0.0.1:8000/api/documents/stopword', {
        results: tokenizeData?.results
      });
      return response.data;
    },
    onSuccess: (data: StopwordResponse) => {
      setStopwordData(data);
    }
  });

  const stemMutation = useMutation<StemResponse, Error, void, unknown>({
    mutationFn: async () => {
      const response = await axios.post<StemResponse>('http://127.0.0.1:8000/api/documents/stem', {
        results: stopwordData?.results
      });
      return response.data;
    },
    onSuccess: (data: StemResponse) => {
        
      setStemData(data);
    }
  });

  // Handler to update individual file fields
  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = [...files];
    newFiles[index] = e.target.files ? e.target.files[0] : null;
    setFiles(newFiles);
  };

  // Update file upload handler to iterate over the files array
  const handleFileUpload = () => {
    if (files.some(f => f !== null)) {
      // Reset state before uploading new files
      setTokenizeData(null);
      setStopwordData(null);
      setStemData(null);

      const formData = new FormData();
      files.forEach(f => {
        if (f) {
          formData.append('file', f);
          formData.append('title', f.name);
          formData.append('language', language); // Use the selected language
        }
      });

      axios
        .post('http://127.0.0.1:8000/api/documents/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(response => {
          setTokenizeData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.error("No files selected.");
    }
  };

  // Update handleSubmit to use documents array
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset state before uploading new text
    setTokenizeData(null);
    setStopwordData(null);
    setStemData(null);

    // Set language for every document
    const documentsWithLanguage = documents.map(doc => ({ ...doc, language }));
    // Send documentsWithLanguage instead of documents
    tokenizeMutation.mutate({ documents: documentsWithLanguage });
  };

  // Add a handler for updating document fields
  const handleDocumentChange = (index: number, field: keyof Omit<DocumentInput, 'language'>, value: string) => {
    const newDocs = [...documents];
    newDocs[index] = { ...newDocs[index], [field]: value, language };
    setDocuments(newDocs);
  };

  // Handle changing the number of documents
  const handleDocCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = parseInt(e.target.value, 10);
    setDocCount(count);
    const currentCount = documents.length;
    if (count > currentCount) {
      setDocuments([...documents, ...Array(count - currentCount).fill({ title: '', original_text: '', language })]);
    } else {
      setDocuments(documents.slice(0, count));
    }
  };

  // Update handler to change number of file inputs
  const handleFileCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = parseInt(e.target.value, 10);
    setFileCount(count);
    setFiles(Array(count).fill(null));
  };

  useEffect(() => {
    if (tokenizeData && tokenRef.current) {
      const container = d3.select(tokenRef.current);
      container.selectAll("*").remove();
      const docsContainer = container.append("div")
        .attr("class", "flex space-x-4 overflow-x-auto")
        .style("padding", "8px");
      tokenizeData.results.forEach((result) => {
        const docDiv = docsContainer.append("div")
          .attr("class", "border p-4 rounded")
          .style("min-width", "300px");
        docDiv.append("h4")
          .text(`Tokenized: ${result.title}`)
          .style("font-weight", "bold")
          .style("margin-bottom", "8px");
        const table = docDiv.append("table")
          .style("border-collapse", "collapse")
          .style("width", "100%");
        const thead = table.append("thead");
        const tbody = table.append("tbody");
        thead.append("tr")
          .selectAll("th")
          .data(["Token", "Count"])
          .enter()
          .append("th")
          .text(d => d)
          .style("border", "1px solid #ccc")
          .style("padding", "4px")
          .style("background-color", "#f2f2f2");
        Object.entries(result.tokens).forEach(([word, count]) => {
          const row = tbody.append("tr");
          row.append("td")
            .text(word)
            .style("border", "1px solid #ccc")
            .style("padding", "4px");
          row.append("td")
            .text(count)
            .style("border", "1px solid #ccc")
            .style("padding", "4px");
        });
      });
    }
  }, [tokenizeData]);

  useEffect(() => {
    if (stopwordData && stopwordRef.current) {
      const container = d3.select(stopwordRef.current);
      container.selectAll("*").remove();
      const docsContainer = container.append("div")
        .attr("class", "flex space-x-4 overflow-x-auto")
        .style("padding", "8px");
      stopwordData.results.forEach((result) => {
        const docDiv = docsContainer.append("div")
          .attr("class", "border p-4 rounded")
          .style("min-width", "300px");
        docDiv.append("h4")
          .text(`Stopword: ${result.title}`)
          .style("font-weight", "bold")
          .style("margin-bottom", "8px");
        const table = docDiv.append("table")
          .style("border-collapse", "collapse")
          .style("width", "100%");
        const thead = table.append("thead");
        const tbody = table.append("tbody");
        thead.append("tr")
          .selectAll("th")
          .data(["Word", "Count"])
          .enter()
          .append("th")
          .text(d => d)
          .style("border", "1px solid #ccc")
          .style("padding", "4px")
          .style("background-color", "#f2f2f2");
        Object.entries(result.words).forEach(([word, count]) => {
          const row = tbody.append("tr");
          row.append("td")
            .text(word)
            .style("border", "1px solid #ccc")
            .style("padding", "4px");
          row.append("td")
            .text(count)
            .style("border", "1px solid #ccc")
            .style("padding", "4px");
        });
      });
    }
  }, [stopwordData]);

  useEffect(() => {
    if (stemData && wordsRef.current) {
      const container = d3.select(wordsRef.current);
      container.selectAll("*").remove();
      
      // Create a horizontally scrollable container for each document's stem tables
      const docsContainer = container.append("div")
        .attr("class", "flex space-x-4 overflow-x-auto")
        .style("padding", "8px");
      
      stemData.results.forEach((result) => {
        const docDiv = docsContainer.append("div")
          .attr("class", "border p-4 rounded")
          .style("min-width", "300px");
        
        docDiv.append("h4")
          .text(`Stem: ${result.title}`)
          .style("font-weight", "bold")
          .style("margin-bottom", "8px");
        
        const properties = [
          { key: "words", label: "Words", data: result.words },
          { key: "labialized", label: "Labialized", data: result.labialized },
          { key: "shortened", label: "Shortened", data: result.shortened },
          { key: "punctuation", label: "Punctuation", data: result.punctuation }
        ];
        
        properties.forEach(prop => {
          if (Object.keys(prop.data).length) {
            const tableDiv = docDiv.append("div")
              .style("margin-bottom", "8px");
            tableDiv.append("h5")
              .text(prop.label)
              .style("font-weight", "600")
              .style("margin-bottom", "4px");
            const table = tableDiv.append("table")
              .style("border-collapse", "collapse")
              .style("width", "100%");
    
            const thead = table.append("thead");
            const tbody = table.append("tbody");
    
            thead.append("tr")
              .selectAll("th")
              .data(["Token", "Count"])
              .enter()
              .append("th")
              .text(d => d)
              .style("border", "1px solid #ccc")
              .style("padding", "4px")
              .style("background-color", "#f2f2f2");
    
            Object.entries(prop.data).forEach(([word, count]) => {
              const row = tbody.append("tr");
              row.append("td")
                .text(word)
                .style("border", "1px solid #ccc")
                .style("padding", "4px");
              row.append("td")
                .text(count)
                .style("border", "1px solid #ccc")
                .style("padding", "4px");
            });
          }
        });
      });
      
      // Render posting list in a separate section below with clear formatting
      const postingContainer = container.append("div")
        .style("margin-top", "24px");
      postingContainer.append("h3")
        .text("Posting List")
        .style("font-weight", "bold")
        .style("margin-bottom", "8px");
      const postingTable = postingContainer.append("table")
        .style("border-collapse", "collapse")
        .style("width", "100%");
      const postingThead = postingTable.append("thead");
      const postingTbody = postingTable.append("tbody");
      postingThead.append("tr")
        .selectAll("th")
        .data(["Word", "Documents"])
        .enter()
        .append("th")
        .text(d => d)
        .style("border", "1px solid #ccc")
        .style("padding", "4px")
        .style("background-color", "#f2f2f2");
      Object.entries(stemData.posting_list).forEach(([word, details]) => {
        const row = postingTbody.append("tr");
        row.append("td")
          .text(`${word}(${details.frequency})`)
          .style("border", "1px solid #ccc")
          .style("padding", "4px");
        row.append("td")
          .text(details.titles.join(", "))
          .style("border", "1px solid #ccc")
          .style("padding", "4px");
      });
    }
  }, [stemData]);

  useEffect(() => {
    setDocuments(prevDocs => prevDocs.map(doc => ({ ...doc, language })));
  }, [language]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 shadow-lg rounded">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Upload Document</h2>
      
      {/* Dropdown to select upload mode */}
      <div className="mb-6">
        <label className="mr-4 font-semibold text-gray-700">Select Mode:</label>
        <select 
          value={uploadMode} 
          onChange={e => setUploadMode(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="text">Text</option>
          <option value="doc">Doc</option>
        </select>
      </div>
      
      {/* Moved language dropdown outside the conditional so it's always visible */}
      <div className="mb-6">
        <label className="mr-4 font-semibold text-gray-700">Language:</label>
        <select 
          value={language} 
          onChange={e => setLanguage(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">English</option>
          <option value="am">Amharic</option>
        </select>
      </div>
      
      {uploadMode === "text" ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dropdown to choose number of documents */}
          <div>
            <label className="mr-4 font-semibold text-gray-700">Number of Documents:</label>
            <select 
              value={docCount} 
              onChange={handleDocCountChange}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Array.from({ length: 5 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
       

          {/* Map over documents to render title and original_text fields */}
          {documents.map((doc, index) => (
            <div key={index} className="space-y-2 border p-2 rounded">
              <input 
                type="text" 
                placeholder={`Title for Document ${index + 1}`} 
                value={doc.title} 
                onChange={e => handleDocumentChange(index, 'title', e.target.value)} 
                required 
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <textarea 
                placeholder={`Enter text for Document ${index + 1}`} 
                value={doc.original_text} 
                onChange={e => handleDocumentChange(index, 'original_text', e.target.value)} 
                required
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
          ))}
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Upload and Tokenize
          </button>
        </form>
      ) : (
        <div className="mt-8 p-4 bg-white border border-gray-200 rounded shadow">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Upload File Directly</h3>
          {/* Dropdown to choose number of files */}
          <div className="mb-4">
            <label className="mr-4 font-semibold text-gray-700">Number of Files:</label>
            <select 
              value={fileCount}
              onChange={handleFileCountChange}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Array.from({ length: 5 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          {/* Render file input fields based on chosen count */}
          {Array.from({ length: fileCount }, (_, index) => (
            <div key={index} className="mb-4">
              <input 
                type="file" 
                onChange={e => handleFileChange(index, e)}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button 
            onClick={handleFileUpload} 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Upload File
          </button>
        </div>
      )}
      
      {(tokenizeData || stopwordData || stemData) && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-10">Results</h3>
          {tokenizeData && (
            <div><span className="text-lg font-semibold text-gray-600">Tokenized</span>
            <div ref={tokenRef} className="overflow-x-auto" /></div>
          )}
          {stopwordData && (
            <div className='mt-10'><span className="text-lg font-semibold text-gray-600">Stop words Removes</span>
            <div ref={stopwordRef} className="overflow-x-auto" /></div>
          )}
          {stemData && (
            <div className='mt-10'><span className="text-lg font-semibold text-gray-600">Stemmed</span>
            <div ref={wordsRef} className="overflow-x-auto" /></div>
          )}
        </div>
      )}
      {tokenizeData && !stopwordData && (
        <button 
          onClick={() => stopwordMutation.mutate()} 
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Remove Stop Word
        </button>
      )}
      {stopwordData && !stemData && (
        <button 
          onClick={() => stemMutation.mutate()} 
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Stem and Normalize
        </button>
      )}
    </div>
  );
};

export default UploadDocument;
