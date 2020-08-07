import React from 'react';
import {AnswerObject} from "../App";

type Props = {
    question : string;
    answers : string[];
    callback : ( e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer : AnswerObject | undefined;
    questionNumber: number;
    totalQuestions : number;

}

const QuestionCard: React.FC<Props> = ({question , answers, callback , userAnswer, questionNumber , totalQuestions}) => {
    return (
        <>
        <div>
            <p>
                Questions : {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html : question}} />
                
            <div>
            {answers.map(answer => {
                    return (
                        // <h2
                        // correct={userAnswer?.correctAnswer === answer}
                        // userClicked={userAnswer?.answer === answer}
                        // key={answer}
                        // >
                            <button disabled={userAnswer ? true:false} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        // </h2>
                    )
                })}
                
            </div>
        </div>
        </> 
    )
}

export default QuestionCard
