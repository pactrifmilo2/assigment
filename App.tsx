import Welcome from "./Components/HelloWorld";
import Greeting from "./Components/Props";
import Counter from "./Components/States";
import CheckBool from "./Components/ConditonalRendering";
import List from "./Components/ListRendering";
import MyForm from "./Components/Form";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";


function App() {
  let cities = ["New york", "Los Angeles", "California", "Times"];
  //cities = [];

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/checkBool">CheckBool</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/checkBool" element={<CheckBool condition={true} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
