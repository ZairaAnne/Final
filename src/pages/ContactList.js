import React from "react";
import ContactList from "../components/ContactList";

const ContactListPage = ({ contacts, deleteContact }) => (
  <div>
    <h1>Contact List</h1>
    <ContactList contacts={contacts} onDelete={deleteContact} />
  </div>
);

export default ContactListPage;
