import Part from "./Part"

const Content = ({course}) => {
    const total = course.reduce(
        (total , exercises) => total + exercises.exercises, 0)

    return(
        <div>
            {course.map(inf => <Part key={inf.id} inf={inf} />)}
            <p><b>total of </b>{total} <b>exercises</b></p>
        </div>
    )
}

export default Content