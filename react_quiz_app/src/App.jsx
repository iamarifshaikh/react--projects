import React from 'react';
import './Styles/App.css'
import Quiz from './Components/Quiz';
import StartQuiz from './Components/StartQuiz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <StartQuiz /> } />
          <Route path='/quiz/:name' element={ <Quiz /> } />
        </Routes>  
      </Router>
    </div>
  )
}

export default App
