import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={"items"}>
        <button>Items</button>
      </Link>
      <div>
      <Link to={"signin"}>
        <button style={{margin: '10px'}}>Авторизация</button>
      </Link>
      <Link to={"register"}>
        <button>Регистрация</button>
      </Link>
      </div>
    </>
  );
}

export default App;
