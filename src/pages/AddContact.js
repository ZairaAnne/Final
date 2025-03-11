import React from "react";
import ContactForm from "../components/ContactForm";

const AddContact = ({ addContact }) => <ContactForm onSubmit={addContact} />;

export default AddContact;
