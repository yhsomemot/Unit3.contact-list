import React from "react";
import { useState, useEffect } from "react";
import ContactList from "./ContactList";


export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }