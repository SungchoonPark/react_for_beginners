import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/* TODOLIST
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === "") {
      return;
    }
    setTodo("");
    setTodos(preventArray => [...preventArray, todo]);
  }
  
  const deleteBtn = (index) => {
    // setTodos(todos.filter((item, todoIdx) => index !== todoIdx))
    setTodos((curretnTodos) => curretnTodos.filter((_, currentIdx) => index !== todoIdx)) 
  };

  return (
    <div>
      <h1>My Todos({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          value={todo}
          onChange={onChange}
          placeholder='Write your Todo'
        />
        <button>Add Todo</button>
      </form>
      <hr />
      <ul>
      {
        todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={()=>deleteBtn(index)}>❌</button>                
              </li>
          )
        )
      }
      </ul>
      
    </div>
  );
}
*/
/*
function App() {
  const[loading, setLoading] = useState(true);
  const[coins, setCoins] = useState([]);
  const[coinCost, setCoinCost] = useState(0);
  const[need, setNeed] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
    
  }, [])

  const handleInput = (event) => (
    setNeed(event.target.value)
  )

  const changeValue = (event) => {
    setCoinCost(event.target.value)
    setNeed(1)
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <hr />
      {loading
      ?
      <strong>Loading...</strong>
      :
      <select onChange={changeValue}>
        {coins.map((coin) => {
          return (
            <option 
              key={coin.id}
              value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {Math.round(coin.quotes.USD.price)} USD
            </option>
          )
        })}
      </select>}
      <h1>KRW : {Math.round(coinCost*1411).toLocaleString('ko-KR')}WON</h1>
      <h2>Test Dollar</h2>
      <div>
        <label htmlFor='inputValue'>Input dollar</label>
        <input type='number' onChange={handleInput} id='inputValue' defaultValue={need} />
      </div>
      <h3>You can get {need/coinCost}</h3>
    </div>
  )
}
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
