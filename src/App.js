import Quiz from './Pages/Quiz.js';
import Login from './Pages/Login.js';
import Home from './Pages/Home.js';
import ForgotPassword from './Pages/ForgotPassword.js';
import Private from './Components/PrivateRouter.js';
import ChooseTopic from './Components/TheChooseTopic.js';
import style from './Assets/Style/style.css';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ChooseTopic/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/login" element={<Private><Login/></Private>}/>
            <Route path="/forgotpassword" element={<Private><ForgotPassword/></Private>}/>
        </Routes>
    </div>
  );
}

export default App;

