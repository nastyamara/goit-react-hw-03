import Contact from "../Contact/Contact"
import css from './ContactList.module.css'



export default function ContactList({ propsFromState, removeContact }) {
    return( <ul className={css.contactList}> 
        {propsFromState.map((contact) => (
            <li key={contact.id}>
                <Contact contact={contact} removeContact={removeContact} />
            
            </li>))}
    </ul>)
}
   
