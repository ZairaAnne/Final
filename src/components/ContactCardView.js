import React from "react";

const ContactCardView = ({ contacts, deleteContact, editContact }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contacts Information</h2>
      <p className="mb-6">
        Your list of contacts appears here. To add a new contact, click on the
        Add New Contact button.
      </p>

      <div className="flex justify-between mb-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Add New Contact
        </button>
        <div className="flex space-x-2">
          <button className="border p-2 rounded-lg hover:bg-gray-200">🔳</button>
          <button className="border p-2 rounded-lg hover:bg-gray-200">📄</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-4 bg-white border rounded-lg shadow-md flex flex-col space-y-2"
          >
            <h3 className="text-lg font-semibold">{contact.name}</h3>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-600">{contact.phone}</p>

            <div className="flex justify-end space-x-2 mt-2">
              <button
                onClick={() => editContact(contact)}
                className="text-gray-600 hover:text-blue-600"
              >
                ✏️
              </button>
              <button
                onClick={() => deleteContact(contact.id)}
                className="text-gray-600 hover:text-red-600"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCardView;
