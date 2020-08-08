import React, { useState , useEffect} from 'react';
import { Wrapper , GlobalStyle } from "./Styles/App.styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API/API";
import QuestionCard from "./components/QuestionCard";
import QuizForm from "./components/QuizForm";

export type AnswerObject = {
  question: string;
  correct: boolean;
  answer: string;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [category,setCat] = useState("");
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY,category);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(score + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers([...userAnswers, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion !== TOTAL_QUESTIONS) {
      setNumber(nextQuestion);
    }
  }

  const setCategory = (e:React.MouseEvent<HTMLOptionElement>) => {
    const value = e.currentTarget.value;
    setCat(value);
  } 
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1 data-aos="fade-zoom-in">QUIZ TIME</h1>
        {userAnswers.length === TOTAL_QUESTIONS ? <button className="start" onClick={() => { setGameOver(true); setUserAnswers([])} }>Back To Start</button> : null}
        {gameOver ? <QuizForm data-aos="flip-left" startTrivia={startTrivia} setCategory={setCategory}/> : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <img src="https://media.tenor.com/images/6a5bcfba04e217d91f7aec29849ae208/tenor.gif" data-aos="flip-up" alt="loading" /> : null}

        {!loading && !gameOver ? (<QuestionCard data-aos="flip-left"
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />) : null}
        {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (<button className="next" onClick={nextQuestion}>
          Next Question
        </button>) : null}
      </Wrapper>
    </>
  );
}
export default App;
