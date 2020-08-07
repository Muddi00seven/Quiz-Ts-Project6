import React, {useState} from 'react';
import './App.css';
import QuizList from './Components/QuizList';
import QuestionCard from './Components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState } from "./API/API";

export type AnswerObject = {
  question: string;
  answer : string;
  correct: boolean;
  correctAnswer : string ;
}

const TotalQuestions = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [category,setCat] = useState("");
  const quizStart = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TotalQuestions, Difficulty.EASY,category);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correctAnswer === answer;
      if (correct) {
        setScore(score + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correctAnswer,
      } 
      setUserAnswer([...userAnswer, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion !== TotalQuestions) {
      setNumber(nextQuestion);
    }
  }

  const setCategory = (e:React.MouseEvent<HTMLOptionElement>) => {
    const value = e.currentTarget.value;
    setCat(value);
  } 


  return (
    <div className="App">
      {/* <QuizList/> */}
      <h1>Quiz 1</h1>
      {userAnswer.length === TotalQuestions ? <button onClick={() => {setGameOver(true);setUserAnswer([])}} > Restart </button>: null}
      {gameOver ? <QuizList quizStart={quizStart} setCategory={setCategory}/> : null}
      {gameOver ? <p> {score}</p> : null}
      {!loading && !gameOver ? (<QuestionCard questionNumber={number + 1}
          totalQuestions={TotalQuestions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callback={checkAnswer}/>): null}
  </div>
  );
}

export default App;
