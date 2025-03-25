"use client"
import React, { useState } from 'react';
import axios from 'axios';

interface SearchResult {
  title: string;
  original_text: string;
  similarity: number;
}

const Search = () => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('en');
  const [searchType, setSearchType] = useState('vector');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/documents/vector?q=${query}&lang=${language}`
    );
    console.log(response.data.results);
    setResults(response.data.results);
  };

  const handleSearchBool = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/documents/boolean?q=${query}&lang=${language}`
    );
    console.log(response.data.results);
    setResults(response.data.results);
  };

  const handleSearchClick = () => {
    if (searchType === 'bool') {
      handleSearchBool();
    } else {
      handleSearch();
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 shadow-lg rounded">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Search Documents
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">English</option>
            <option value="am">Amharic</option>
          </select>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="vector">Vector</option>
            <option value="bool">Bool</option>
          </select>
        </div>
        <button
          onClick={handleSearchClick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      {results.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Results</h3>
          <div className="space-y-4">
            {results.map((doc, index) => (
              <div
                key={index}
                className="border p-4 rounded hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {doc.title}
                </h4>
                <p className="text-gray-600">{doc.original_text}</p>
                <p className="text-gray-600">{doc.similarity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;