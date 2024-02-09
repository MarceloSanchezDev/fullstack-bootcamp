import Part from "./Part"

const Content = ({course}) => {
    return(
        <div>
            {course.map(inf => <Part key={inf.id} inf={inf} />)}
        </div>
    )
}

export default Content