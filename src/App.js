import './App.css';
import contactsData from './contacts.json';
import React, { useState } from 'react';
import { FaTrophy } from 'react-icons/fa';

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contactsData.length - 5)) + 5;
    const randomContact = contactsData[randomIndex];
    setContacts(prevContacts => [...prevContacts, randomContact]);
  }

  const sortByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  }
  
  const sortByPopularity = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  }

  const deleteContact = (contactId) => {
        const filteredContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(filteredContacts);
  }
 
  return (

    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt={contact.name} style={{width: "50px"}}/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? <FaTrophy /> : ''}</td>
            <td>{contact.wonEmmy ? <FaTrophy /> : ''}</td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
