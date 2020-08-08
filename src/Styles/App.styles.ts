import styled, {createGlobalStyle} from "styled-components";
// https://image.freepik.com/free-vector/blue-quiz-background-with-light-bulb-pencils_23-2147598504.jpg

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        width: 100%;
    }
    body {
        background-image: url("https://i.pinimg.com/originals/65/99/ae/6599ae0e0488b5ab2da2fd9cbb9757d9.gif");
        background-size: cover;
        display: flex;
        justify-content: center;

    }
    * {
        border-sizing: border-box;
        font-family: 'Catamaran',sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > p {
        color: #fff;
    }

    .score {
        color: white;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline,Haettenschweiler,'Arial Narrow Bold',sans-serif;
        background-color : #3a8ac7;
        font-size: 70px;
        text-align: center;
        margin: 2px;
        font-weight: 400;
    }

    .start,.next {
        background-color : #3a8ac7;
        border-radius: 30px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        cursor: pointer;

    }

    .start {
        max-width: 200px;
    }
`