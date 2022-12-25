import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Pages/Main/Main';
import VideoPage from './Pages/VideoPage/VideoPage';
import { useState } from 'react';
import Shorts from './Pages/Shorts/Shorts';

function App() {
  const [collapsed,setCollapsed] = useState(false);
  const [clicked,setClicked] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Main 
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              clicked={clicked}
              setClicked={setClicked}
            />
            }/>
          <Route path="/watch" element={
            <VideoPage 
              img="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
              video="https://www.youtube.com/watch?v=I2ljrTAfdxs"
              title="Cool Video in 1 hour fun check it out Now!!!!Link in the description"
              channel="Mr.Beast"
              avatar="https://yt3.ggpht.com/ytc/AMLnZu9UlPHTbLrgfwt0ucUKik9Z8DfO6dVgVnfum2o9hA=s900-c-k-c0x00ffffff-no-rj"
              likes="100K"
              dislikes="10K"
              subscriber="17M"
              views="1M"
              date="2 months"
              description=""
              comments=""
              suggestion=""
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />}
          />
          <Route path="/shorts" element={
            <Shorts 
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
