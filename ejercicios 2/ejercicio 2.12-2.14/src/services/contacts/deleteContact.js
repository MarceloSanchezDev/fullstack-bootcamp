export const deleteContact = (id) => {
    return fetch(`http://localhost:3000/persons/${id}`,{
        method: 'DELETE',
      })
}