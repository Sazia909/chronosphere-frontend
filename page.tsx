"use client";
import { useState } from "react";

export default function Home() {
  const [year, setYear] = useState("");
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  async function handleSearch() {
    const res = await fetch("https://chronosphere-backend.onrender.com/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        year: Number(year),
        topic: topic,
      }),
    });

    const data = await res.json();
    setResult(data.history);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        Chronosphere
      </h1>

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <input
          type="number"
          placeholder="Enter Year"
          className="w-full p-3 border rounded mb-4"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Topic"
          className="w-full p-3 border rounded mb-6"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Explore Time
        </button>

        {result && (
          <p className="mt-6 text-gray-700 text-center">
            {result}
          </p>
        )}
      </div>
    </main>
  );
}
