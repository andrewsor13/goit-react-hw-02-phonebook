import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, filter, onDeleteContact }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contact_list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.contact}>
          <ContactItem contact={contact} />
          <button
            className={styles.button}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
