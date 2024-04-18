import css from './Contact.module.css'

export default function Contact({ contact, removeContact }) {



    return (
    <div className={css.contact}>
            <p>{ contact.name}</p>
            <p>{ contact.number}</p>
            <button onClick={()=> removeContact(contact.id)}>Delete</button>
        </div>
     )
}