import Home from './Pages/Home.js';
import SingUp from './Pages/SingUp.js';
import Main from './Assets/Style/Main.css';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/singup" element={<SingUp/>}/>
        </Routes>
    </div>
  );
}

export default App;

