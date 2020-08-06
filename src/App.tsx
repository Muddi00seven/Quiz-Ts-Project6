import React from 'react';
import './App.css';
import QuizList from './Components/QuizList';
import QuestionCard from './Components/QuestionCard'
function App() {
  return (
    <div className="App">
      <QuestionCard/>
      <QuizList/>
      <h1>HELLO WOLRD</h1>
    </div>
  );
}

export default App;
