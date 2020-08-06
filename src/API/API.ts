import {QuestionShuffle} from './Shuffle'

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
    const endpoint = `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=${catergory}`;
    const data = await(await fetch(endpoint)).json
    const data.results.map((question: Questions) =>{
        
    }) 

}