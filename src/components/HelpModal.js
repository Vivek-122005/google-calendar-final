import React from "react";

export default function HelpModal({ onClose }) {
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Help & FAQs</h2>
        <p className="mb-4">
          Need help? Here are some quick tips:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Navigation:</strong> Use the arrow buttons to move between months.
          </li>
          <li>
            <strong>View Modes:</strong> Switch between Day, Week, and Month views using the dropdown in the header.
          </li>
          <li>
            <strong>Adding Events:</strong> Click on a date or time slot to add new events.
          </li>
          <li>
            <strong>Editing Events:</strong> Click on an event to edit or delete it.
          </li>
          <li>
            <strong>Search:</strong> Use the search button to find events by title.
          </li>
        </ul>

        <p className="mb-4">
          For more detailed support, visit our{" "}
          <a
            href="https://support.google.com/calendar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Help Center
          </a>.
        </p>

        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}