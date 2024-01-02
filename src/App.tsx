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
        <button>Sign In</button>
      </Link>
      <Link to={"register"}>
        <button>Sign Up</button>
      </Link>
      </div>
    </>
  );
}

export default App;
