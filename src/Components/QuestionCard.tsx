import React, {useEffect} from 'react';
import {AnswerObject} from "../App";
import {Wrapper,ButtonWrapper} from "../Styles/QuestionCard.styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
type Props = {
    question: string;
    answers: string[];
    callback: (e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return (
        <Wrapper>
            <p className="number">
                QUESTION: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => {
                    return (
                        <ButtonWrapper
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        key={answer}
                        >
                            <button disabled={userAnswer ? true:false} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    )
                })}
            </div>
        </Wrapper>
    )
}

export default QuestionCard;