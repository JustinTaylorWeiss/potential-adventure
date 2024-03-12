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
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    padding: 20px 0;
    width: 50%;
    margin: auto;
    margin-bottom: 80px;
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
        align-items: center;
        width: auto;
        margin: auto;
    }
`;

const Title = styled.div`
    font-weight: 1000;
    font-size: 3rem;
    width: 100%;
    margin-bottom: 40px;
    text-align: left;
    @media (max-width: 1200px) {
        text-align: center;
    }
`;

const Subtitle = styled.div`
    font-weight: 800;
    margin: 0 0 10px 80px;
    font-size: 2rem;
    width: 100%;
    text-align: left;
    @media (max-width: 1200px) {
        text-align: center;
        margin-left: 0;
        margin-bottom: 20px;
    }
    @media (max-width: 500px) {
        letter-spacing: 0.2rem;
        font-size: 1.7rem;
    }
`;

const Row = styled.span`
    font-weight: 600;
    margin: 8px 0;
    margin-left: 80px;
    width: 100%;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    @media (max-width: 1200px) {
        width: auto;
        margin-left: 0;
        text-align: center;
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

const SubRow = styled.div`
    display: block;
    line-height: 200%;
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

const normalConstructionText = [`Rough cut timbers`, `Sheathing`, `Lagging`, `Shoring Lumber`, `Dimentional Lumber`, `Plywood`, `OSHA Plank`, `Crane Mats`, `Trailer Decking`,]
const ConstructionTextWithHyphen = [` - Rough cut timbers`, ` - Sheathing`, ` - Lagging`, ` - Shoring Lumber`, ` - Dimentional Lumber`, ` - Plywood`, ` - OSHA Plank`, ` - Crane Mats`, ` - Trailer Decking`,]

const normalHardwoodText = [`Charcuterie Boards`, `Slabs`, `Tables`];
const hardwoodTextWithHyphen = [` - Charcuterie Boards`, ` - Slabs`, ` - Tables`];

export const LandingWhatTile = () => {

    return <>
        <AboutWrapper>
            <TextWrap>
                <Title>OUR WOOD</Title>
                <Subtitle>HEAVY CONSTRUCTION LUMBER</Subtitle>
                {
                    (useMediaQuery({ query:'(max-width: 1200px)'})
                        ? normalConstructionText
                        : ConstructionTextWithHyphen
                    ).map((text, i) => (
                        <Row key={`What-C-Row-${i}`}>{text}</Row>
                    ))
                }
                {
                    useMediaQuery({ query:'(max-width: 1200px)'}) && <Column>
                        <IMG src={plank}/>
                    </Column>
                }
                <Spacer $height="100px"/>
                <Subtitle>HARDWOOD PRODUCTS</Subtitle>
                {
                    (useMediaQuery({ query:'(max-width: 1200px)'})
                        ? normalHardwoodText
                        : hardwoodTextWithHyphen
                    ).map((text, i) => (
                        <Row key={`What-H-Row-${i}`}>{text}</Row>
                    ))
                }
            </TextWrap>
            <Column>
                <IMG src={board}/>
            </Column>
        </AboutWrapper>
    </>
};