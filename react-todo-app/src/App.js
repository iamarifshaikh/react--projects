import React, { useState,useEffect } from 'react'
import './App.css'

const getLocalData = () => {
  const todoList = localStorage.getItem('myTodos');

  if (todoList) {
    return JSON.parse(todoList);
  } else {
    return [];
  }
};

const App = () => {
  
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editItem, setEditItem] = useState("")
  const [toggleButton, setToggleButton] = useState(false);

  const addItems = () => {
    if (!inputData) {
      alert("Todo can't be empty !");
    } else if(inputData && toggleButton) {
      setItems(
        items.map((elements) => {
          if (elements.id === editItem) {
            return { ...elements, name: inputData };
          }
          return elements;
        })
      );
    setInputData("");
    setEditItem(null);
    setToggleButton(false);
    }
    else {
      const detailData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, detailData]);
      setInputData("");
    };
  };

  const editItems = (index) => {
    const itemEdit = items.find((elements) => {
      return elements.id === index;
    });
    setInputData(itemEdit.name);
    setEditItem(index);
    setToggleButton(true);
  }

  const removeItems = () => {
    setItems([]);
  }

  const deleteItems = (index) => {
    const updatedItems = items.filter((elements) => {
    return elements.id !== index;
    });
    setItems(updatedItems);
  };

   useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(items));
   }, [items]); 
  
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <div className='playground'>
        
        <input type="text"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          placeholder='Add your TODO'
        />
        {toggleButton ?
          (<button onClick={addItems}>Edit</button>)
          :
          (<button onClick={addItems}>Add</button>)
        }
        
        <input type="reset" onClick={removeItems} />
      </div>

      <div className='todos'>
        {items.map((elements,index) =>   {
          return (
            <div className='items' key={elements.id}>
              <h3>{elements.name}</h3>
              <div className='Buttons'>
                <button onClick={()=> editItems(elements.id)}>Edit</button>
                <button onClick={()=> deleteItems(elements.id)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;