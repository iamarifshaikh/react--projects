import React from 'react'
import { Link, useParams } from 'react-router-dom';
import StartQuiz from './StartQuiz';
import '../Styles/Score.css';

const Score = ({data,restartQuiz,score}) => {  
    const { name } = useParams();

    const endGame = () => {

    }

    return (
        <div className='score'>
          <h2>Here is your score {name} </h2>
          <div>Correct Answers: {score} / {data.length}</div>
          <div className='twoButton'>
                <Link className='button' to='/'>End</Link>
                &nbsp;&nbsp;&nbsp;<div> OR </div>&nbsp;&nbsp;&nbsp;
                <div className='button' onClick={restartQuiz}>Restart Quiz</div>
          </div>
        </div>
  )
}

export default Score;