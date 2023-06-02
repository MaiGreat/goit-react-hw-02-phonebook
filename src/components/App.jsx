import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
  };

  // handleNameChange = evt => {
  //   this.setState({ name: evt.currentTarget.value });
  // }

// handleSubmit = evt => {
//   evt.preventDefault();
//   const newContact = {
//     id: nanoid(),
//     name: evt.currentTarget.elements.name.value,
//     number: evt.currentTarget.elements.number.value
//   };
//   console.log(newContact);
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, newContact],
//     name: ''
//   }));
//   evt.currentTarget.reset();
//   }
  
  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  
  render() {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <div>
  <h1>Phonebook</h1>
          <h2>Phonebook</h2>
                <ContactForm
                    contacts={this.state.contacts}
                    filter={this.state.filter}
                    addContact={this.addContact}
                />
                <h2>Contact</h2>
                <Filter
                        value={this.state.filter}
                        onChange={this.filterContacts}
                    />

        </div>
        {/* <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              />
          </label>
          <label>
            Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
          <button type="submit">Add contact</button> */}
        {/* </form> */}
        <h2>Contact</h2>
        <h3>Find contacts by name</h3>
        <label>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.filterContacts}
          />
        </label>
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>{contact.name} - {contact.number}</li>
            ))}
      </ul>
        </>
    );
    }
}

export default App;