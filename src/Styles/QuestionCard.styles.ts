import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0080a3;
    padding: 40px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    text-align: center;

    p {
        font-size: 1rem;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8
    }

    button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, rgb(0,100,0), rgb(0,255,0))'
        : !correct && userClicked
        ? 'linear-gradient(90deg, rgb(100,0,0), rgb(255,0,0))'
        : 'linear-gradient(90deg, rgb(0,0,100), rgb(0,0,255))'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25); 
    }
        
    }
`