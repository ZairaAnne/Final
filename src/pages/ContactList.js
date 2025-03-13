import React, { useState } from "react";
import ContactList from "../components/ContactList";
import ContactCardView from "../components/ContactCardView";

const ContactListPage = ({ contacts, deleteContact, editContact }) => {
  const [viewMode, setViewMode] = useState("table"); // "table" or "card"

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact List</h1>

      {/* View Mode Toggle Buttons */}
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${viewMode === "table" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
          onClick={() => setViewMode("table")}
        >
          📄 Table View
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${viewMode === "card" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
          onClick={() => setViewMode("card")}
        >
          🔳 Card View
        </button>
      </div>

      {/* Conditionally Render Table or Card View */}
      {viewMode === "table" ? (
        <ContactList contacts={contacts} onDelete={deleteContact} onEdit={editContact} />
      ) : (
        <ContactCardView contacts={contacts} onDelete={deleteContact} onEdit={editContact} />
      )}
    </div>
  );
};

export default ContactListPage;
