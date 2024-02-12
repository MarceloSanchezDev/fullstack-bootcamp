export const  updateContact = async (id , contact) => {
    return await fetch(`http://localhost:3000/persons/${id}`,{
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}