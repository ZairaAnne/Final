import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import AddContact from "./pages/AddContact";
import ContactListPage from "./pages/ContactList.js";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const formattedContacts = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      }));
      setContacts(formattedContacts);
    });
  }, []);

  const addContact = (contact) => {
    axios.post("https://jsonplaceholder.typicode.com/users", contact).then((response) => {
      setContacts([...contacts, { ...contact, id: response.data.id }]);
    });
  };

  const deleteContact = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
      setContacts(contacts.filter((contact) => contact.id !== id));
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactListPage contacts={contacts} deleteContact={deleteContact} />} />
        <Route path="/add-contact" element={<AddContact addContact={addContact} />} />
      </Routes>
    </Router>
  );
};

export default App;
