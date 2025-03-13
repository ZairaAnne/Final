import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import AddContact from "./pages/AddContact";
import ContactListPage from "./pages/ContactList.js";
import EditContactModal from "./components/EditContactModal";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Fetch contacts from the local JSON file
  useEffect(() => {
    fetch("/data/contacts.json")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error loading contacts:", error));
  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const editContact = (contact) => {
    setEditingContact(contact);
  };

  const saveContact = (updatedContact) => {
    setContacts(contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    ));
    setEditingContact(null);
  };

  return (
    <Router>
      <Navbar />
      {showPopup && <div className="popup">Successfully deleted</div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactListPage contacts={contacts} deleteContact={deleteContact} editContact={editContact} />} />
        <Route path="/add-contact" element={<AddContact addContact={addContact} />} />
      </Routes>
      {editingContact && (
        <EditContactModal
          contact={editingContact}
          isOpen={!!editingContact}
          onSave={saveContact}
          onCancel={() => setEditingContact(null)}
        />
      )}
    </Router>
  );
};

export default App;
