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

function App() {
  const  { user } = useSelector((state) =>  state.user);
  const  { quizIsReady, topicModal } = useSelector((state) =>  state.questions);

  return (
    <div className="App">
      {topicModal ? <ChooseTopic/>: null}
        <Routes>
            <Route path="/"   element={<Home/>}/>
            <Route path="/quiz" element={<Private quizIsReady={quizIsReady}><Quiz/></Private>}/>
            <Route path="/login" element={<Public user={user}><Login/></Public>}/>
            <Route path="/forgotpassword" element={<Public user={user}><ForgotPassword/></Public>}/>
        </Routes>
    </div>
  );
}

export default App;

