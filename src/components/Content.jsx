import Parts from "./Parts";

const Content = ({ courses }) => {

    return (
        <div>
            {courses.map(course => {
                return <div key={course.id}>
                    <h1>{course.name}</h1>
                    <ul>
                        {course.parts.map(item => {
                            return <li key={item.id}>
                                {item.name} {item.exercises}
                            </li>
                        })}
                        <h4>total of {course.parts.reduce((sum, value) => {
                            return sum + value.exercises
                        }, 0)} exercises </h4>
                    </ul>

                </div>
            })}
        </div>
    )
}

export default Content