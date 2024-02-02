import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
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
                <h2>{contact ? contact.name : "please wait..."}</h2>
            </section>
        )
}
