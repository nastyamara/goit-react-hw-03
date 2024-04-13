export default function Contact({ contact, removeContact }) {



    return (
        <div>
            <p>{ contact.name}</p>
            <p>{ contact.number}</p>
            <button onClick={()=> removeContact(contact.id)}>Delete</button>
        </div>
     )
}