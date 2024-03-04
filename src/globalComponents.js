import styled, { keyframes } from "styled-components";

const fadeToFull = keyframes`
    0% {
        background: transparent;
        color: ${props => props.$light ? "white" : "black"};
    } 
    100% {
        background-color: ${props => props.$light ? "white" : "black"};
        color: ${props => props.$light ? "black" : "white"};
    }
`;

export const Button = styled.button`
    margin-top: 100px;
    color: ${props => props.$light ? "white" : "black"};
    font-size: 2.5rem;
    padding: 25px 20px;
    background: transparent;
    border-radius: 7.5px;
    border: 3px solid ${props => props.$light ? "white" : "black"};
    font-family: "roboto", sans-serif;
    font-weight: 800;
    letter-spacing: 0.3rem;
    font-size: 1.5rem;
    filter: drop-shadow(0px 0px 5px black);
    &:hover {
        animation: ${fadeToFull} 0.2s linear;
        background-color: ${props => props.$light ? "white" : "black"};
        color: ${props => props.$light ? "black" : "white"};
    }
`;

export const TopLogo = styled.img`
    position: absolute;
    z-index: 1;
    transform: translate(-50%, 0);
    top: 15px;
    left: 50%;
    width: 10%;

    @media (max-width: 1000px) {
        width: 20%;
    }
    @media (max-width: 600px) {
        width: 30%;
    }
    @media (max-width: 450px) {
        width: 25%;
    }
`; 