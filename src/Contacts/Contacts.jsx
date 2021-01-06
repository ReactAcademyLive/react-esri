import React, { useState, useEffect } from 'react';
import { ContactTable } from './ContactTable';

export default function Contacts() {
  const [contacts, setContacts] = useState([])

  async function getData() {
    const resp = await fetch("http://localhost:3001/contacts");
    const data = await resp.json();
    setContacts(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>List of contacts</h1>
      <ContactTable contacts={contacts} isFetching={isFetching} />
    </div>
  )
}


