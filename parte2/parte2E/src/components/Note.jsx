const Note = ({body, title}) =>{
    return(
        <li className="note">
            <p>{title}</p>
            <p>{body}</p>
        </li>
    )
}

export default Note