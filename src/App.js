import Quiz from './Pages/Quiz.js';
import Login from './Pages/Login.js';
import Home from './Pages/Home.js';
import ForgotPassword from './Pages/ForgotPassword.js';
import Private from './Components/PrivateRouter.js';
import Public from './Components/PublicRouter.js';
import ChooseTopic from './Components/TheChooseTopic.js';
import style from './Assets/Style/style.css';

import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useState } from 'react'

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [quizTopics, setQuizTopics] = useState([]);

  const  { user } = useSelector((state) => state.user)

  return (
    <div className="App">
      {showPopUp ? <ChooseTopic quizTopics={quizTopics} setShowPopUp={setShowPopUp} setQuizTopics={setQuizTopics} />: null}
        <Routes>
            <Route path="/"   element={<Home setShowPopUp={setShowPopUp}/>}/>
            <Route path="/quiz" element={<Private user={user}><Quiz/></Private>}/>
            <Route path="/login" element={<Public user={user}><Login/></Public>}/>
            <Route path="/forgotpassword" element={<Public user={user}><ForgotPassword/></Public>}/>
        </Routes>
    </div>
  );
}

export default App;

