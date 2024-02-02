import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContacts] = useState(null);

    useEffect(() => {
        async function fetchContacts() {
            try {
                //fetch logic
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContacts(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts();
    }, []);

        return (
            <section>
                {contact ? (
                    <div>
                        <h1>{contact.name}</h1>
                        <p>{contact.username}</p>
                        <p>{contact.website}</p>
                        <p>{contact.address.street}</p>
                        <p>{contact.address.suite}</p>
                        <p>{contact.address.city}</p>
                        <p>{contact.address.zipcode}</p>
                        <h2>{contact.company.name}</h2>
                        <p>{contact.company.catchPhrase}</p>
                        <p>{contact.company.bs}</p>
                        <button onClick={()=> setSelectedContactId(null)}>Return</button>
                    </div>
                ) : (
                    <h2>Please wait...</h2>
                )}
            </section>
        )
}
