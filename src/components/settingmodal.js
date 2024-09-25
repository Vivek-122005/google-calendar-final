import React, { useState, useEffect } from "react";

export default function SettingsModal({ onClose }) {
  // Initialize darkMode state from localStorage
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
    
    if (storedDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  function handleDarkModeChange() {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  function handleNotificationsChange() {
    setNotificationsEnabled(!notificationsEnabled);
    if (!notificationsEnabled) {
      // Request permission for notifications
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Notifications Enabled", {
            body: "You will receive notifications.",
          });
        }
      });
    }
  }

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="modal p-6 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Calendar Settings</h2>

        {/* Dark Mode Toggle */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkModeChange}
              className="mr-2"
            />
            <span>{darkMode ? "✓" : ""} Dark Mode</span>
          </label>
        </div>

        {/* Notifications Toggle */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationsChange}
              className="mr-2"
            />
            <span>{notificationsEnabled ? "✓" : ""} Enable Notifications</span>
          </label>
        </div>

        <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
}
