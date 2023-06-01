import React, { Component } from 'react';

class FormToAddContacts extends Component {
    
render() {
    return (
        <>
            <h2>Phonebook</h2>
                <form>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value=""
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    </form>
            <button>Add contact</button>
        </>
        )
    }
    

}

export default FormToAddContacts;