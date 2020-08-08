import { shuffleMath } from "./Shuffle/MathShuffle";

export type Quiz = {
    category: string;
    difficulty: string;
    type: string;
    correct_answer: string;
    question: string;
    incorrect_answers: string[];
}

export type QuestionState = Quiz & { answers: string[] }

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty,category: string) => {
    const fetchUrl = `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=${category}`;
    const data = await (await fetch(fetchUrl)).json();
    return data.results.map((question: Quiz) => {
        return({
            ...question,
            answers: shuffleMath([...question.incorrect_answers, question.correct_answer])
        })
    })
}