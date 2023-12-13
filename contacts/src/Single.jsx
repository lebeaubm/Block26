function Single({contact}) {
    return (
        <div>
            <p>{contact.address.city}, {contact.address.street},{contact.address.suite}, , {contact.address.zipcode}</p>
            <p>{contact.company.name}</p>
            <p>{contact.company.catchPhrase}</p>
            <p>{contact.company.bs}</p>
            <p>{contact.email}</p>
            <h1>{contact.name}</h1>
            <p>{contact.phone}</p>
            <p>{contact.website}</p>
        </div>

    )
}

export default Single