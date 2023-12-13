import { useState, useEffect } from 'react'
import './App.css'
import All from "./All"
import Single from './Single'

function App() {
  const [contacts, setContacts] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1) * 1)

  //get data
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      const data = await response.json()
      console.log(data)
      setContacts(data)

    }
    fetchContacts()
  }, [])

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1) * 1)
    })
  }, [])

  const contact = contacts.find((contact) => {
    return hash === contact.id
  })
  
  {
    //console.log(contact)
  }

  //componets
  return (
    <div>
      <h1>Contact List Length {contacts.length}</h1>

      <All contacts={contacts} hash={hash} />

      {
        //console.log(contact)
      }

      {
        contact ? (<Single contact={contact} />) : null
      }


    </div>
  )
}

export default App
