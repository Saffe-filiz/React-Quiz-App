import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Main from './Assets/Style/Main.css';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;

