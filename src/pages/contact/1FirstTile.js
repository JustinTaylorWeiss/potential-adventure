import styled from "styled-components";
import hero from "./assets/hero.jpg";
import logo from "./assets/whiteLogo.png";
import { Button, TopLogo } from "../../globalComponents";

const ContactWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    font-size: 2.5rem;
    background: 
        radial-gradient(transparent 40%, black),
        url(${hero});
    background-size: cover;
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: white;
`;

const TextWrap = styled.div`
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        top: 60%;
    }
`;

const Row = styled.span`
    filter: drop-shadow(1px 1px 0px black);
    margin: 5px;
    @media (max-width: 1000px) {
        font-size: 2rem;
    }
    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
    @media (max-width: 575px) {
        font-size: 1.2rem;
    }
    @media (max-width: 500px) {
        font-size: 1rem;
    }
    @media (max-width: 425px) {
        letter-spacing: 0.2rem;
    }
`;

const Logo = styled.img`
    position: absolute;
    z-index: 1;
    transform: translate(-50%, 0);
    top: 15px;
    left: 50%;
    width: 10%;
`; 

const TextAnchor = styled.a`
    text-decoration: none;
    color: white;
    &:hover {
        color: #e6bc49;
    }
`;

export const FirstTile = () => (
    <ContactWrapper>
        <TopLogo src={logo}/>
        <TextWrap>
            <Row>
                WE ARE AVAILABLE 24/7 AND CAN
            </Row> 
            <Row>
                DELIVER DAY OR NIGHT. CALL OR TEXT
            </Row>
            <Row>
                <TextAnchor href="tel:17184862800">{` (718)486-2800`}</TextAnchor> FOR MORE INFORMATION.
            </Row>
        </TextWrap>
    </ContactWrapper>
);