
import { Footer } from './components/Layouts/Footer';
import { Allroutes } from './routes/Allroutes';
import './App.css';
import {Header} from './components/Layouts/Header';
import { useState } from 'react';




function App() {
  const[endPointState,setEndPointState]=useState("")
  return (
    <div className="App">
      <div className="App dark:bg-dark">
      <Header endPointState={endPointState} setEndPointState={setEndPointState} />
      <Allroutes endPointState={endPointState} setEndPointState={setEndPointState} />
     <Footer />

 
    </div>
    </div>
  );
}

export default App;
