import React, { useState } from "react";
import ToDoListChild from "./ToDoListChild";

const SignUp = () => {

  // to do code start

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const addButton = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");
  }

 const delItem = (id) => {
   setItems((oldItems) => {
     return oldItems.filter((arrElem,index) => {
       return index !== id
    })
  })
  }
  // to do code end


  // Inc Dec code start

// const [num, setNum] = useState(0)

  
//   const incNum = () => {
//     (num < 0) ? alert('sdsd') : (setNum(num + 1));
//   }
//   const decNum = () => {
//     (num > 0) ? (setNum(num - 1)) : alert('sdsd');
//   }
  
  
  // Inc Dec code end
  

  return (
    <>
      <div className="main_div">

        {/* to do list code  start*/}
        <div className="center_div">
          <br />
          <h1 style={{ backgroundColor: "#fff" }}>ToDo list</h1>
          <br />
          <input type="text"
            placeholder="add a item"
            onChange={addButton}
            value={inputList} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {
              items.map((itemValue, index) => {
                // console.log(itemValue);
                return (
                  <ToDoListChild
                    id={index}
                    Value={itemValue}
                    key={index}
                    onSelect={delItem}
                  />);
              }) 
              // <li onClick={DelItem} key={index}> {itemValue} </li>
            }
          </ol>
        </div>
        {/* to do list code  end*/}


       {/* <div> <h1>{num}</h1>
        </div>
        
        <button onClick={incNum}>Increment</button>
        <button onClick={decNum}>Decrement</button>
 */}

      </div>
    </>
  );
};

export default SignUp;
