import Main from '../Assets/Style/Main.css'
import Progress from './TheProgress.js'

import { useState } from 'react'
function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(0)
  return (
    <div className="App">
        <div className="container">
            <Progress selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion} questLength={6}/>
            <div className="questContent">
                <h1>An interface design application that runs in the browser with team-based collaborative design projects</h1>
            </div>
        </div>
    </div>
  );
}

export default App;

