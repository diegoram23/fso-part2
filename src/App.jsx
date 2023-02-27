import React from "react"
import course from "./course.jsx"
import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total.jsx"

function App() {
  const total = course.parts.reduce((sum, value) => {
    return sum + value.exercises
  }, 0)

  const contentElements = course.parts.map(item =>
    <Content
      key={item.id}
      name={item.name}
      exercises={item.exercises}
      id={item.id}
    />
  )
  return (
    <div>
      <Header name={course.name} />
      {contentElements}
      <Total total={total} />
    </div>
  )
}

export default App
