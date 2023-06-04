// import { nanoid } from 'nanoid';
// import React, { Component } from 'react';

const ContactList = ({ contacts, filter }) => {
    const filteredContacts = contacts.filter(
        contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <ul>
            {filteredContacts.map(contact => (
                <li key={contact.id}>
                    {contact.name} - {contact.number}
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;