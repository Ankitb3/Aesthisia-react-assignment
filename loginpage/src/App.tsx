import {Routes,Route} from "react-router-dom"
import Loginpage from "./components/loginpage"
import Home from "./components/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/"  element={<Loginpage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App