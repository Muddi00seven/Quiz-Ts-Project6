import React, { useState, useEffect } from 'react';

type Props = {
    id: number,
    name : string 
}

type FormProps = {
    quizStart : () => void,
    setCategory: (e: React.MouseEvent<HTMLOptionElement>) => void,
}
const QuizList: React.FC<FormProps> = ({quizStart , setCategory}) => {
    const [data , setData ] = useState<Props[]>([]);
    useEffect(()=>{
        const fetchData = async () =>{
            const data = await fetch("https://opentdb.com/api_category.php");
            const {quizCategory} = await data.json();
            setData(quizCategory);
        }
        fetchData();
    })
    return (
        <div>
            <label>
                Quiz Catergory
            </label>
            <br />
                <select required>
                    {data ? data.map((category) => { return (<option value={category.id} key={category.id} onClick={(e) => setCategory(e)}>{category.name}</option>) }) : (<option>Default</option>)}
                </select>
                <button className="start" onClick={quizStart    }>Start</button>

        </div>
    )
}

export default QuizList
