import styled from "styled-components";
import { Button } from "../../globalComponents";
import { Link } from "react-router-dom";
import { useURL } from "../../contexts/useURL";
import plank from "./assets/plank.png";
import board from "./assets/board.png";
import { useMediaQuery } from 'react-responsive';

const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 4fr;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    padding: 20px 0;
    width: 40%;
    margin: auto;
    margin-bottom: 80px;
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
    }
    @media (max-width: 500px) {
        width: 95%;
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
    }
`;

const Title = styled.div`
    filter: drop-shadow(1px 1px 0.5px black);
    font-size: 2.5rem;
    width: 100%;
    text-align: left;
    @media (max-width: 1200px) {
        margin-bottom: 40px;
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
    @media (max-width: 500px) {
        font-size: 1rem;
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
        font-size: 0.9rem;
    }
    @media (max-width: 500px) {
        filter: drop-shadow(0.5px 0.5px 0.5px black);
        font-size: 0.7rem;
    }
`;

const Spacer = styled.div`
    height: ${props => props.$height};
    width: 0;
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
        margin-top: 50px;
        align-items: center;
    }
`;

export const LandingWhatTile = () => {

    const { updateCurrentURL } = useURL();

    return <>
        <AboutWrapper>
            <Title>OUR WOOD</Title>
            <Spacer/>
            <TextWrap>
                <Subtitle>HEAVY CONSTRUCTION LUMBER</Subtitle>
                <Row>- SHEATHING / LAGGING / SHORING LUMBER</Row>
                <Row>- DIMENSIONAL LUMBER</Row>
                <Row>- PLYWOOD</Row>
                <Row>- OSHA PLANK</Row>
                <Row>- CRANE MATS</Row>
                <Row>- TRAILER DECKING</Row>
                <Row>- ROUGH CUT TIMBERS UP TO 12" x 12"x 20'</Row>
                <Spacer $height="40px"/>
                <Subtitle>HARDWOOD PRODUCTS</Subtitle>
                <Row>- CHARCUTERIE BOARDS</Row>
                <Row>- SLABS</Row>
                <Row>- TABLES</Row>
            </TextWrap>
            <Column>
                <IMG src={board}/>
            </Column>
        </AboutWrapper>
    </>
};