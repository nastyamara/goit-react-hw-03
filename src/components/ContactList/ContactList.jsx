import Contact from "../Contact/Contact"



export default function ContactList({ propsFromState, removeContact }) {
    return( <ul>
        {propsFromState.map((contact) => (
            <li key={contact.id}>
                <Contact contact={contact} removeContact={removeContact} />
            
            </li>))}
    </ul>)
}
   
