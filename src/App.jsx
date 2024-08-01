import { useState } from 'react'
import './App.css'

function ToDoListItems({ listVal, index, toDoList, setToDoList }) {
  let [status, setStatus] = useState(false);

  const deleteItem = () => {
    let finalData = toDoList.filter((v, i) => i != index);
    setToDoList(finalData);
  }

  return (
    <li className={(status) ? 'activeNode' : ''} onClick={() => setStatus(!status)} >{listVal} <span onClick={deleteItem}>&times;</span></li>
  )
}

function App() {
  const [toDoList, setToDoList] = useState([])

  const saveList = (e) => {
    let inputVal = e.target.toName.value;
    if ((!toDoList.includes(inputVal)) &&  (inputVal!= '')){
      let finalList = [...toDoList, inputVal];
      setToDoList(finalList);
    }
    else {
        alert("This item already exists in the list")
    }

    e.preventDefault();
  }

  let list = toDoList.map((value, i) => {
    return (
      <ToDoListItems listVal={value} key={i} index={i} toDoList={toDoList} setToDoList={setToDoList} />
    )
  })

  return (
    <>
      <div className='main'>
        <div className="formCont">
          <div>TO DO LIST</div>
          <form onSubmit={saveList}>
            <input type="text" name='toName' placeholder='Enter your List Item'/> <button type='submit'>Save</button>
          </form>
        </div>
        <div className="outerDiv">
          <ul>
            {list}
          </ul>
        </div>
      </div>

    </>
  )
}

export default App


