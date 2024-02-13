export const createContact = (contact) => {
    return fetch('http://localhost:3000/persons',{
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}