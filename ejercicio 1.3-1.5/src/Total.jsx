const Total = ({total}) => {
    return(
        <p><b>Total of exercises: </b>{total[0].exercises +total[1].exercises +total[2].exercises }</p>
    )
}

export default Total