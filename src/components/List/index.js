import React, { useContext } from 'react';
import ListItem from './ListItem/'
import { MyContext } from './context.js';
function List(props) {
  const { list } = useContext(MyContext)
  return (
    <ul>
      {
        list.map((item,index) => <ListItem item={item} num={index} key={item.id} />)
      }
    </ul>
  );
}

export default List;