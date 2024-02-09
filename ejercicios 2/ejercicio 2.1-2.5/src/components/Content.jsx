import Part from "./Part"

const Content = ({course}) => {
    console.log(course)
    const total = course.reduce(
        (total , exercises) => total + exercises.exercises, 0)

    return(
        <div>
            {course.map(inf => <Part key={inf.id} inf={inf} />)}
            <p>total of {total} exercises</p>
        </div>
    )
}

export default Content