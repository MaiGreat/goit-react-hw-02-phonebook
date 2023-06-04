import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    
    

    handleNameChange = evt => {
        const { name, value} = evt.target
        this.setState({
            [name]: value
        });
    }



    handleSubmit = evt => {
        evt.preventDefault();

        const {name, number} = this.state
        const newContact = {
            id: nanoid(),
            name,
            number
        };
        
        this.props.addContact(newContact);
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
                        value={this.state.number}
                        onChange={this.handleNameChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit" >Add contact</button>
            </form>
        </>
    );
    }
    

}

export default ContactForm;