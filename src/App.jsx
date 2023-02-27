import React from "react"
import course from "./course.jsx"
import Content from "./components/Content"
import Header from "./components/Header"

function App() {
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
    </div>
  )
}

export default App
