import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Private from './Components/PrivateRouter.js';
import style from './Assets/Style/style.css';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Private><Login/></Private>}/>
        </Routes>
    </div>
  );
}

export default App;

