import React, { useState } from 'react';
import { data } from '../Constant/QuizData';
import '../Styles/Quiz.css';
import Score from './Score';

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [appearButton, setAppearButton] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (ans) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
      setAppearButton(true);
      setAnswered(false);
    } else {
      setShowScore(true);
    }
  }

  const handleBack = (ans) => {
    const backQuestion = currentQuestion - 1;
    setCurrentQuestion(backQuestion);
    if (backQuestion == 0) {
      setAppearButton(false);
    }
  }

  const selectOption = (index,isCorrect) => {
    if (!answered) {
      setAnswered(true);
      setSelectAnswer(index);
      setIsCorrect(isCorrect)
      return setScore(score + 1);
    }
    }

  const restartQuiz = () => {
    setShowScore(false);
    setAnswered(false);
    setAppearButton(false); 
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
  }

  return (
    <div className='quiz'>
      {showScore ? (<Score data={data} restartQuiz={restartQuiz} score={score} />) :
      (
        <>
          <div className="number">Q. { data[currentQuestion].id}</div>
          <div className='question'>{data[currentQuestion].question}</div>
          <div className='options'>
            {data[currentQuestion].answer.map((ans,index) => {
            return (
              <div
                className="list"
                key={index}
                disabled={answered}
                onClick={() => selectOption(index,isCorrect)}>
                {ans.option}
              </div>
            )
            })}
          </div>
          <div className='allButton'>
            { appearButton && <div className='button' onClick={handleBack}>Back</div>}
                {currentQuestion === data.length - 1 ?
                  (<div className='button' onClick={handleSubmit}>Finish</div>) :
                  (<div className='button' onClick={handleSubmit}>Next</div>)
                }
          </div>
        </>
        )}
        </div>
  )
}

export default Quiz;