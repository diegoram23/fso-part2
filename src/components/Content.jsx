import Parts from "./Parts";

const Content = ({ courses }) => {
 
    return (
        <div>
            {courses.map(course => <Parts key={course.id} course={course}/>)}
        </div>
    )
}

export default Content