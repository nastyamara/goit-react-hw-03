import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from './App.module.css'


function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contactbook');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

  return ([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])}
)
  const removeContact = (contactToRemove) => {
    setContacts((oldCont) => { return oldCont.filter((contact) => contact.id !== contactToRemove) })
  }

  const [filter, setFilter] = useState('')
  

  useEffect(() => {localStorage.setItem('contactbook', JSON.stringify(contacts))

  }, [contacts])

  const addContact = (newContact) => {
    console.log(newContact)
    newContact.id = nanoid()
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const visibleContacts = contacts.filter((contact)=>contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
   
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={ setFilter} />
      <ContactList propsFromState={visibleContacts} removeContact={removeContact} />
     
     
    </div>
  )
}

export default App
