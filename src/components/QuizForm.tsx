import React, { useState, useEffect } from 'react';
import { Wrapper } from "../Styles/QuestionCard.styles";

type Props = {
    id: number,
    name: string
}

type FormProps = {
    startTrivia: () => void,
    setCategory: (e: React.MouseEvent<HTMLOptionElement>) => void,
}
const QuizForm: React.FC<FormProps> = ({ startTrivia, setCategory }) => {
    const [data, setData] = useState<Props[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://opentdb.com/api_category.php");
            const { trivia_categories } = await data.json();
            setData(trivia_categories);
        }
        fetchData();
    })
    return (
        <>
            <Wrapper>
                <label>SELECT CATERGORY</label>
                <br />
                <select required>
                    {data ? data.map((category) => { return (<option value={category.id} key={category.id} onClick={(e) => setCategory(e)}>{category.name}</option>) }) : (<option>DEFAULT</option>)}
                </select>
            </Wrapper>
            <button className="start" onClick={startTrivia}>LET'S START</button>
        </>
    )
}

export default QuizForm;