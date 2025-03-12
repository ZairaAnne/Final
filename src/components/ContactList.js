import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h1></h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
              <td>{contact.phone}</td>
              <td>
                <button className="button" onClick={() => onDelete(contact)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
