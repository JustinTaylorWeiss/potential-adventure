import styled from "styled-components";
import hero from "./assets/hero.jpg";
import logo from "./assets/whiteLogo.png";
import { Button, TopLogo } from "../../globalComponents";
import { Link } from "react-router-dom";
import { useURL } from "../../contexts/useURL";
import { useEffect } from "react";

const ContactWrapper = styled.div`
    position: relative;
    width: 100vw;
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: white;
`;

const Hero = styled.img`
    width: 100vw;
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
    @media (max-width: 600px) {
        top: 60%;
    }
`;

const CTA = styled(Button)`
    margin-top: 30px;
    &:active {
        padding: 20px 15px;
        margin-top: 35px;
        margin-bottom: 5px;
    }
    @media (max-width: 1000px) {
        margin-top: 20px;
        font-size: 1.2rem;
        padding: 20px 20px;
        &:active {
            padding: 15px 15px;
            margin-top: 25px;
        }
    }
    @media (max-width: 800px) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        padding: 15px 10px;
        &:active {
            padding: 10px 5px;
        }
    }
    @media (max-width: 600px) {
        font-size: 0.8rem;
        border-width: 2px;
    }
    @media (max-width: 500px) {
        margin-top: 10px;
        padding: 13px 10px;
        &:active {
            padding: 10px 5px;
            margin-top: 13px;
        }
    }
`;

const Row = styled.span`
    filter: drop-shadow(1px 1px 0px black);
    margin: 5px;
    @media (max-width: 1000px) {
        font-size: 1.5rem;
    }
    @media (max-width: 800px) {
        font-size: 1rem;
    }
    @media (max-width: 600px) {
        filter: drop-shadow(0.5px 0.5px 0px black);
        letter-spacing: 0.1rem;
    }
    @media (max-width: 500px) {
        font-size: 0.9rem;
        margin: 3px;
    }
`;

const CTAClick = (url, update) => () => {
    document.getElementById("AppWrap").scrollTo(0, 0);
    update(url);
}

export const FirstTile = () => {

    useEffect(() => {window.scrollTo(0, 0)},[]);

    const { updateCurrentURL } = useURL();

    return <ContactWrapper>
        <TopLogo src={logo}/>
        <Hero src={hero}/>
        <TextWrap>
            <Row>
                THE FOLLOWING ARE SAMPLE PRODUCTS
            </Row> 
            <Row>
                FOR MORE INFORMATION AND PRICING
            </Row>
            <Link to="/contact-us" onClick={CTAClick("/contact-us", updateCurrentURL)}>
                <CTA $light={true}>CONTACT US</CTA>
            </Link>
        </TextWrap>
    </ContactWrapper>
};