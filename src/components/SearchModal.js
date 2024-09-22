import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

export default function SearchModal({ onClose }) {
  const { searchEvents, savedEvents } = useContext(GlobalContext);
  const [query, setQuery] = useState("");

  function handleSearch() {
    searchEvents(query);
    onClose(); // Close the modal after search
  }

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Search Events</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by event title"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
        >
          Search
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-black py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
