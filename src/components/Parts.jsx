const Parts = ({ course }) => {

    const total = course.parts.reduce((sum, value) => {
        return sum + value.exercises
    }, 0)

    return (

        <div>
            <h2>{course.name}</h2>
            {course.parts.map(part => {
                return <div key={part.id}>
                    <p>{part.name} {part.exercises}</p>
                </div>
            })}
            <h4>total of {total} exercises</h4>
        </div>
    )
}


export default Parts