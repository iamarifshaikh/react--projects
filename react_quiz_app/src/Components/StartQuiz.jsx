import React, { useState } from 'react'
import "../Styles/StartQuiz.css"
import '../Styles/Entry.css';
import { useNavigate } from 'react-router-dom'

const StartQuiz = () => {
  const [startQuiz,setStartQuiz] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  
  const start = () => {
    event.preventDefault();
    navigate(`/quiz/${name}`);
  }

  const handleChange = (event) => {
  const inputValue = event.target.value;
    // Remove any non-alphabet characters from the value
    const alphabetOnly = inputValue.replace(/[^A-Za-z]/g, '');
    setName(alphabetOnly);
  }

  const handleName = () => {
    event.preventDefault();
    setStartQuiz(true);
  }

  return (
    <div className='nameBox'>
      {startQuiz ?
        (<div>
          <h1 style={{paddingLeft:20}}>Hello, {name}!</h1>
          <h2  className='h2' style={{paddingLeft:20}}>Let's Start With A Quiz</h2>
          <p>We've created quiz app so we can <br /> apprehend how much you know <br /> about react!</p>
          <button className='button' onClick={start}>Start</button>
        </div>)
        :
        (
          <div className='quiz'>
            <h1>What Is Your Name ?</h1>
            <form onSubmit={handleName}>
              <input type="text"
                value={name}
                pattern="[A-Za-z]+"
                onChange={handleChange}
                title="Please enter alphabets only"
                required
              />
              <button className='button' style={{marginLeft:0}}>Start Quiz</button>
            </form>
          </div>
        )
      }  
    </div>
  )
}

export default StartQuiz;