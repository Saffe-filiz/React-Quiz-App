import Progress from '../Components/TheProgress.js';
import Options from '../Components/TheOptions.js';
import Control from '../Components/TheControl.js';
import Navigation from '../Components/TheNavigation.js';
import ContentBgImage from '../Assets/Icons/ContentBgImage.png'

import { useState } from 'react'

function Home() {
  const [selectedQuestion, setSelectedQuestion] = useState(0)
  return (
        <div className="container" style={{backgroundImage: `url(${ContentBgImage})`}}>
            <Navigation/>
            {/*<Progress questLength={5}/>*/}
            <div className="questContent">
                <h1>An interface design application that runs in the browser with team-based collaborative design projects{selectedQuestion}</h1>
            </div>
            <Options options={['Test1', 'Test2', 'Tesft3', 'Test4', 'Test5', 'Test6']}/>
            <Control 
                selectedQuestion={selectedQuestion} 
                setSelectedQuestion={setSelectedQuestion}/>
        </div>
    );
};


export default Home;
