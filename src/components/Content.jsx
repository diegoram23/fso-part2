
const Content = ({ course }) => {

    const total = course.parts.reduce((sum, value) => {
        return sum + value.exercises
    }, 0)

    return (
        <div>
            {course.parts.map(course => {
                return <div key={course.id}>
                    <p>{course.name} {course.exercises}</p>
                </div>
            })}
            <h4>The total of {total} exercises</h4>
        </div>
    )
}

export default Content