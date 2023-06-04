import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';



class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
            return alert(`${this.state.name} is already in contacts!`);
        }
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact]
  }));
}
  
  render() {
    
    return (
    <>
      <div>
        <h2>Phonebook</h2>
          <ContactForm
            contacts={this.state.contacts}
            value={this.state.value}
            addContact={this.addContact}
          />
        <h2>Contact</h2>
          <Filter
            onChange={this.filterContacts}
            
          />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
      </div>
          
    </>
    );
    }
}

export default App;