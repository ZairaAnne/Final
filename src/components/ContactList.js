import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div>
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
                <button className="icon-button1" onClick={() => onEdit(contact)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="icon-button2" onClick={() => {
                  console.log('Delete button clicked for', contact);
                  onDelete(contact.id);
                }}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
