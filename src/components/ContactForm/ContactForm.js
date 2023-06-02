import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
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
            number: evt.currentTarget.elements.number.value
        };
        console.log(newContact);
        this.props.addContact(newContact); // Викликати функцію з пропсами для додавання контакту
        this.setState({ name: '', number: '' });
        evt.currentTarget.reset();
    };

    
    render() {
    return (
        <>
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
                <button type="submit">Add contact</button>
            </form>
        </>
    );
    }
    

}

export default ContactForm;