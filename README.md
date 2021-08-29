# useReducer && useContext
## 定義useContext
-定義一個使用React.createContext創建MyContext store<br>
-在root組件引入MyContext store<br>
-引入後使用MyContext.Provider包住子組件並且使用value把要共享的屬性或func傳下去<br>

## 定義useReducer<br>
-在roote組件定義一個reducer函式或是要拆成檔案也行<br>
-並且使用useReducer(定義的reducer,初始值) 解構出 一個值與派發函式<br>
-在把這兩個放到Provider的value中去共享<br>

## 使用useContext
-引入定義的createContext創建MyContext<br>
-使用使用useContext(MyContext)就可解構出在root組件value裡面傳遞的參數<br>
-在使用傳過來的reducer派發函式去作操作即可<br>