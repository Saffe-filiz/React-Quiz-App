import Main from '../Assets/Style/Main.css';
import Progress from './TheProgress.js';
import Options from './TheOptions.js';
import Control from './TheControl.js';
import ContentBgImage from '../Assets/Icons/ContentBgImage.png'

import { useState } from 'react'
function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(0)
  return (
    <div className="App">
        <div className="container" style={{backgroundImage: `url(${ContentBgImage})`}} >
            <Progress selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion} questLength={6}/>
            <div className="questContent">
                <h1>An interface design application that runs in the browser with team-based collaborative design projects</h1>
            </div>
            <Options options={['Test1', 'Test2', 'Tesft3', 'Test4', 'Test5', 'Test6']}/>
            <Control/>
        </div>
    </div>
  );
}

export default App;

