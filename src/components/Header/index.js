import React, { useContext,useRef } from 'react';
import { MyContext } from '../List/context.js';
function Header(props) {
  const { list, listDispatch } = useContext(MyContext);
  const input = useRef()
  function addHandler(){
    listDispatch({
      type: 'add', 
      item: {
        id: list.length,
        active: false,
        content: input.current.value,
      }
    })
    input.current.value = ""
  }
  return (
    <div>
      <input ref={input}></input>
      <button onClick={addHandler}>add</button>
    </div>
  );
}

export default Header;