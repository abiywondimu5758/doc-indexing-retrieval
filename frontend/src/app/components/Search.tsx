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
  const [termDocumentMatrix, setTermDocumentMatrix] = useState<{ [term: string]: { [doc: string]: number } }>({}); // added state

  // Compute unique documents and terms for the matrix view
  const docs = Array.from(
    new Set(
      Object.values(termDocumentMatrix).flatMap((docMap) => Object.keys(docMap))
    )
  );
  const terms = Object.keys(termDocumentMatrix);

  const handleSearch = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/documents/vector?q=${query}&lang=${language}`
    );
    console.log(response.data.results);
    setResults(response.data.results);
    console.log(response.data.term_document_matrix); // log matrix
    setTermDocumentMatrix(response.data.term_document_matrix); // store matrix data
  };

  const handleSearchBool = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/documents/boolean?q=${query}&lang=${language}`
    );
    console.log(response.data.results);
    setResults(response.data.results);
    // Optionally, clear or set the term matrix if returned from boolean search
    setTermDocumentMatrix({});
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
      {terms.length > 0 && (
        <div className="mt-8 overflow-auto">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Document Term Matrix</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 bg-gray-200">Term</th>
                {docs.map((doc) => (
                  <th key={doc} className="border px-4 py-2 bg-gray-200">
                    {doc}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {terms.map((term) => (
                <tr key={term}>
                  <td className="border px-4 py-2 font-semibold">{term}</td>
                  {docs.map((doc) => (
                    <td key={doc} className="border px-4 py-2 text-center">
                      {termDocumentMatrix[term][doc] !== undefined
                        ? termDocumentMatrix[term][doc].toFixed(2)
                        : '0'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Search;