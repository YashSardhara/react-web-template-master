import React from "react";

const ToDoListChild = (data) => {
  // console.log(itemValue.itemValue);
    
    
    
  return (
    <>
      <li
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
              key={data + 1}
              onClick={() => {
                data.onSelect(data.id)
          }}>
        <button> X </button>
        {data.Value}
      </li>
    </>
  );
};

export default ToDoListChild;
