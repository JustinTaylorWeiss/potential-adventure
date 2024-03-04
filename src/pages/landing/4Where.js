import styled from "styled-components";
import { Button } from "../../globalComponents";
import { Link } from "react-router-dom";
import { useURL } from "../../contexts/useURL";
import bridge from "./assets/bridge.png";
import { useMediaQuery } from 'react-responsive';

const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    padding: 20px 0;
    width: 40%;
    margin: auto;
    margin-bottom: 100px;
    @media (max-width: 2500px) {
        width: 50%;
    }
    @media (max-width: 2000px) {
        width: 60%;
    }
    @media (max-width: 1600px) {
        width: 70%;
    }
    @media (max-width: 1600px) {
        width: 80%;
    }
    @media (max-width: 1200px) {
        width: 80%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        padding-top: 0px;
    }
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 100%;
    @media (max-width: 1200px) {
        align-items: flex-start;
        width: auto;
        margin: auto;
        margin-top: 0;
    }
    @media (max-width: 700px) {
        align-items: center;
    }
    
`;

const Title = styled.div`
    filter: drop-shadow(1px 1px 0.5px black);
    font-size: 2.5rem;
    width: 100%;
    text-align: left;
    padding-bottom: 15px;
    @media (max-width: 1200px) {
        margin-bottom: 20px;
        text-align: center;
    }
    @media (max-width: 500px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.div`
    filter: drop-shadow(1px 1px 0.5px black);
    margin: 0 0 10px 40px;
    font-size: 2rem;
    width: 100%;
    text-align: left;
    @media (max-width: 1200px) {
        width: auto;
    }
    @media (max-width: 700px) {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
`;

const Row = styled.span`
    filter: drop-shadow(1px 1px 0.5px black);
    margin: 8px 0;
    margin-left: 50px;
    width: 100%;
    font-size: 1.5rem;
    @media (max-width: 1200px) {
        width: auto;
    }
    @media (max-width: 700px) {
        filter: drop-shadow(0.5px 0.5px 0.5px black);
        font-size: 1rem;
        margin-left: 0;
    }
`;

const Spacer = styled.div`
    height: ${props => props.$height};
`;

const IMG = styled.img`
    width: 80%;
    @media (max-width: 1200px) {
        width: 50%;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    @media (max-width: 1200px) {
        margin-top: 30px;
        align-items: center;
    }
`;

const placeNames = ["- THE BRONX", "- BROOKLYN", "- MANHATTAN", "- QUEENS", "- STATEN ISLAND", "- LONG ISLAND", "- NEW JERSEY"];
const placeNameNoHyphen = ["THE BRONX", "BROOKLYN", "MANHATTAN", "QUEENS", "STATEN ISLAND", "LONG ISLAND", "NEW JERSEY"];

export const LandingWhereTile = () => {

    const { updateCurrentURL } = useURL();

    return <>
        <AboutWrapper>
            <TextWrap>
                <Title>WHERE WE DELIVER</Title>
                {
                    (useMediaQuery({ query:'(max-width: 700px)'}) 
                        ? placeNameNoHyphen
                        : placeNames
                    ).map((text, i) => (
                        <Row key={`Row-${i}`}>{text}</Row>
                    ))
                }
                <Spacer $height="60px"/>
            </TextWrap>
            <Column>
                <IMG src={bridge}/>
            </Column>
        </AboutWrapper>
    </>
};