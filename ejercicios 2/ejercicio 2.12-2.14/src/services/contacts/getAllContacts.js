export const getAllContacts = () => {
    return fetch('http://localhost:3000/persons')
    .then(response => response.json())
}