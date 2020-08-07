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
  const [catergory , setCategory ] = useState('');
  const[questions , setQuestions] = useState<QuestionState[]>([]);
  const[Useranswer,setUserAnswer] = useState<AnswerObject[]>([]);
  const[number, setNumber] = useState(0);
  const[score , setScore] = useState(0);
  const[gameOver , setGameOver] = useState(true )

const startQuiz = async () =>{
  setLoading(true);
  setGameOver(false);
  const newQuestions = await fetchQuestions(TotalQuestions, Difficulty.EASY,catergory);
  setQuestions(newQuestions);
  setNumber(0);
  setUserAnswer([]);
  setScore(0);
  setLoading(false);
  setScore(0);
}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  if(!gameOver){
    const answer = e.currentTarget.value;
    const correct = questions[number].correctAnswer === answer;
    if(correct) {
      setScore(score + 1);
    }
    const answerObject = {
      question : questions[number].question,
      answer,
      correct,
      correct_Answer: questions[number].correctAnswer,
    }
    setUserAnswer([...Useranswer, answerObject]);

  }

}
  


  return (
    <div className="App">
      <QuestionCard/>
      <QuizList/>
      <h1>HELLO WOLRD</h1>
    </div>
  );
}

export default App;
