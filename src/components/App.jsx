import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import styles from './App.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: initialContacts,
  filter: '',
  divHeight: 300,
};

export function App() {
  const [state, setState] = useState(initialState);

  const handleAddContact = newContact => {
    const NameAlreadyExist = state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (NameAlreadyExist) {
      alert(`Contact with the name '${newContact.name}' already exists.`);
    } else {
      setState(prevState => ({
        ...prevState,
        contacts: [...prevState.contacts, newContact],
        divHeight: prevState.divHeight + 40,
      }));
    }
  };

  const handleDeleteContact = contactId => {
    const updatedContacts = state.contacts.filter(
      contact => contact.id !== contactId
    );
    setState({ ...state, contacts: updatedContacts });
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <div className={styles.phonebook}>
        <ContactForm onSubmit={handleAddContact} />
      </div>

      <h2>Contacts</h2>
      <div
        className={styles.contacts}
        style={{ height: `${state.divHeight}px` }}
      >
        <Filter
          value={state.filter}
          onChange={value => setState({ ...state, filter: value })}
        />

        <ContactList
          contacts={state.contacts}
          filter={state.filter}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
}
