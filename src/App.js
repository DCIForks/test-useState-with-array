import React, { useState } from 'react'

function App() {
  const [list, setList] = useState([1,2,3,4,5])

  const updateList = () => {
    const newList = list.map(item => getRandomNumber())
     
    setList(newList)
  }

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 10)
  }

  const getList = () => {
    const items = list.map((item, index) => <li key={index}>{item}</li>)
    return <ul>{items}</ul>
  }

  const getButton = () => {
    return (<
      button
      onClick={updateList}
    >
      Update List
    </button>)
  }

  const ul = getList()
  const button = getButton()

  return (
    <div>{ul}{button}</div>
  )
}

export default App;
