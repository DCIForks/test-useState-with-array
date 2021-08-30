import React, { useState } from 'react'

let counter = 0

function App() {
  const [list, setList] = useState([1,2,3,4,5])
  const [otherList, setOtherList] = useState(["A", "B", "C"])

  console.log("counter:", ++counter) // will jump by 2 each time
  console.log("list:", list)
  console.log("otherList:", otherList)

  const updateLists = () => {
    const numberList = list.map(item => getRandomNumber())   
    const letterList =  otherList.map(item => getRandomLetter())

    // Set two different state values for this component. React will
    // call this function twice, but only render once. Both lists will
    // have been updated before the component is rendered.
    setList(numberList)
    setOtherList(letterList)
  }

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 10)
  }

  const getRandomLetter = () => {
    const charCode = 64 + Math.ceil(Math.random() * 26)
    return String.fromCharCode(charCode)
  }

  const getList = (array) => {
    const items = array.map((item, index) => <li key={index}>{item}</li>)
    return <ul>{items}</ul>
  }

  const getButton = () => {
    return (<
      button
      onClick={updateLists}
    >
      Update Lists
    </button>)
  }

  const numbers = getList(list)
  const letters = getList(otherList)
  const button = getButton()

  return (
    <div>{numbers}<hr />{letters}{button}</div>
  )
}

export default App;
