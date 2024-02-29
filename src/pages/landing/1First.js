import styled, { keyframes } from "styled-components";
import background from "./assets/hero.jpg";
import logo from "./assets/whiteLogo.png";
import { Button } from "../../globalComponents";

const LandingTileWrap = styled.div`
    width: 100vw;
    font-size: 2rem;
    height: 80vh;
    background:
        radial-gradient(transparent 40%, black),
        url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    margin-bottom: 50px;
    padding: 0;
    color: white;
    font-weight: 400;
`;

const TextWrap = styled.div`
    position: relative;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CTA = styled(Button)`
    &:active {
        padding: 20px 15px;
        margin-top: 105px;
        margin-bottom: 5px;
    }
`;

const Row = styled.span`
    filter: drop-shadow(0px 0px 2px black);
`;

const Script = styled.span`
    font-family: "League Script", serif;
    font-weight: bold;
    font-size: 4rem;
`;

const Logo = styled.img`
    position: relative;
    transform: translate(-50%, 0);
    top: 20px;
    left: 50%;
    width: 12%;
`; 

export const LandingFirstTile = () => (
    <LandingTileWrap>
            <Logo src={logo} draggable="false"/>
            <TextWrap>
            <Row> 
                {'We sustainably produce'.toUpperCase()}
                <Script draggable="false">&nbsp;timeless&nbsp;</Script>
            </Row> 
            <Row>
                {'wooden pieces from'.toUpperCase()}
                <Script draggable="false">&nbsp;revitalized&nbsp;</Script>
                {'wood'.toUpperCase()}
            </Row>
            <Row>
                {'byproducts, bringing the'.toUpperCase()}
                <Script draggable="false">&nbsp;heart&nbsp;</Script>
                {'of the'.toUpperCase()}
            </Row>
            <Row>
                {'forest to the'.toUpperCase()}
                <Script draggable="false">&nbsp;heart&nbsp;</Script> 
                {'of your home.'.toUpperCase()}
            </Row>
            <CTA $light>SEE OUR GALLERY</CTA>
        </TextWrap>
    </LandingTileWrap>  
);