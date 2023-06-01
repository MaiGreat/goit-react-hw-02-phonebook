import React, { Component } from 'react';
// import FormToAddContacts from './FormToAddContacts/FormToAddContacts'
import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"



class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  handleNameChange = evt => {
    this.setState({ name: evt.currentTarget.value });
  }

handleSubmit = evt => {
  evt.preventDefault();
  const newContact = {
    id: nanoid(),
    name: evt.currentTarget.elements.name.value,
  };
  console.log(newContact);
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
    name: ''
  }));

}
  
  render() {
    return (
      <>
        <h2>Phonebook</h2>
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
          <button type="submit">Add contact</button>
        </form>
        <h2>Contact list</h2>
          <ul>
            {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
            ))}
      </ul>
        </>
    );
    }
}

export default App;