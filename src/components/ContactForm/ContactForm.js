import React, { useState } from 'react';

import styles from './ContactForm.module.css';

import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts-slice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useFetchContactsQuery();
  const contacts = data;

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    addContact({ name, phone });
    setName('');
    setPhone('');
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <h1>Phonebook</h1>
      <label className={styles.label}>
        Name
        <input
          className={styles.inp}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Phone
        <input
          className={styles.inp}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
