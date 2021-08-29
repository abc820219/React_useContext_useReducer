import './App.css';
import Header from './components/Header/'
import List from './components/List/'
// 引入reducer
import React, { useReducer } from 'react';
// 創建一個存取共用的store
import { MyContext } from './components/List/context';
// 處理store的派發函式並且回傳
const reducer = (state, action) => {
  const { item } = action;
  switch (action.type) {
    case 'edit':
      state = state.map(data => {
        if (data.id === item.id) {
          return item
        }
        return data
      });
      return state;
    case 'add':
      state = [...state, item]
      return state;
    case 'del':
      state = state.filter(data => {
        return data.id !== item.id
      });
      return state;
    default: return state;
  }

}

function App() {
  // 定義reducer與初始值
  const [list, listDispatch] = useReducer(reducer,[]);
  return (
    <div className="App">
      {/* context store定義後傳遞reducer與值給子組件使用 */}
      <MyContext.Provider value={{ listDispatch, list }}>
        <Header></Header>
        <List></List>
      </MyContext.Provider>
    </div >
  );
}

export default App;
