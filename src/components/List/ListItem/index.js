import React, { useContext, useRef, useState } from 'react';
// 引入context的store
import { MyContext } from '../context.js';
function ListItem(props) {
  const [open, setOpen] = useState(false)
  const { item, num } = props
  const { id, content } = item
  //使用useContext獲取上層定義Provider裡的value出來用
  const { listDispatch } = useContext(MyContext)
  const input = useRef()
  return (
    <li>
      {
        !open && <span>
          {num}. {content}
        </span>
      }
      {
        open && <input onChange={
          () => listDispatch(
            {
              type: "edit",
              item: {
                id,
                active: false,
                content: input.current.value,
              }
            }

          )
        } ref={input} defaultValue={item.content}></input>
      }
      {
        !open ? <button onClick={() => setOpen(true)}>edit</button> : <button onClick={() => setOpen(false)}>確認</button>
      }
      <button onClick={
        () => listDispatch(
          {
            type: "del",
            item: {
              id,
            }
          }
        )
      }>del</button>
    </li>
  );
}

export default ListItem;