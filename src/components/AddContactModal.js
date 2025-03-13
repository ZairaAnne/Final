import React, { useState } from 'react';
import Modal from 'react-modal';

const AddContactModal = ({ isOpen, onRequestClose, addContact }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={contact.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={contact.email} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={contact.phone} onChange={handleChange} />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </Modal>
  );
};

export default AddContactModal;
