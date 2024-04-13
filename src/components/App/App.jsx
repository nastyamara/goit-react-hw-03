import { useState, useEffect } from "react"
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";


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
    // const contactIdx = contacts.findIndex(contact => contact.id === contactToRemove);
    // contacts.splice(contactIdx, 1)
    // localStorage.setItem('contactbook', JSON.stringify(contacts))
    // setContacts(contacts)
    setContacts((oldCont) => { return oldCont.filter((contact) => contact.id !== contactToRemove) })
   
  }
  

  useEffect(() => {localStorage.setItem('contactbook', JSON.stringify(contacts))

  }, [contacts])

  const onAdd = () => {}

    
  
  return (
    <>
      <h1>Phonebook</h1>

      <ContactList propsFromState={contacts} removeContact={removeContact} />
      <ContactForm  onAdd={onAdd} />
     
    </>
  )
}

export default App
