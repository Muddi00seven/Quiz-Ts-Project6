

export type Questions ={
    catergory : string;
    correct_answer: string;
    difficulty: string;
    incorrectAnswer: string[];
    question : string;
    type: string
}
 export type QuestionState = Questions & {answers: string[]}

 export enum Difficulty  {
EASY = 'easy',
MEDIUM = 'medium',
HARD = 'hard'
 }

 export const fetchQuestions = async (amount: number, difficulty : Difficulty, catergory: string ) =>{
     
 }