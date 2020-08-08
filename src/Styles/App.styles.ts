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
        margin: 0;
        padding: 0;
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
        color: black;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline,Haettenschweiler,'Arial Narrow Bold',sans-serif;
        background-image: linear-gradient(180deg,#fff,red);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(250,0,0,0.5);
        -moz-background-clip: text;
        -moz-text-fill-color: red;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 2px;
        font-weight: 400;
    }

    .start,.next {
        cursor: pointer;
        background: linear-gradient(180deg,#fff,#ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`