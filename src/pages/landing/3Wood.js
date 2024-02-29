import styled from "styled-components";
import slab from "./assets/woodSlab.jpg";
import board from "./assets/board.jpg";
import construction from "./assets/construction.png";

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    margin: 0 10%;
`;

const Title = styled.h2`
    margin: 0;
    margin-bottom: 30px;
    letter-spacing: 1rem;
`;

const SubTitle = styled.h3`
    margin: 30px 0 30px 0;
    font-weight: 400;
    letter-spacing: 0.3rem;
    font-size: 2.5rem;
    filter: drop-shadow(1px 1px 0.5px black);
`;

const WoodIMG = styled.img`
    width: 100%;
    max-width: 1000px;
    margin-bottom: 50px;
    filter: drop-shadow(0px 0px 2px black);
`;

export const LandingWood = () => (
    <AboutWrapper>
        <SubTitle>SLABS</SubTitle>
        <WoodIMG src={slab}/>
        <SubTitle>CHARCUTERIE BOARDS</SubTitle>
        <WoodIMG src={board}/>
        <SubTitle>HEAVY CONSTRUCTION LUMBER</SubTitle>
        <WoodIMG src={construction}/>
    </AboutWrapper>
);