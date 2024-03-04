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
    height: 50vh;
    background-image: url(${hero});
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: oldlace;
    @media (max-width: 800px) {
        height: 40vh;
    }
`;

const TextWrap = styled.div`
    position: absolute;
    width: 80%;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CTA = styled(Button)`
    margin-top: 30px;
    background-color: oldlace;
    border-color: oldlace;
    font-size: 1.5rem;
    color: #101012;
    padding: 15px 30px;
    &:active {
        padding: 10px 20px;
        margin-top: 35px;
        margin-bottom: 5px;
    }
    @media (max-width: 1000px) {
        letter-spacing: 0.2rem;
    }
    @media (max-width: 800px) {
        margin-top: 20px;
        letter-spacing: 0.1rem;
        &:active {
            margin-top: 25px;
        }
    }
    @media (max-width: 600px) {
        margin-top: 10px;
        padding: 10px 20px;
        font-size: 1rem;
        &:active {
            padding: 5px 10px;
            margin-top: 15px;
        }
    }
    @media (max-width: 450px) {
        letter-spacing: 0;
    }
`;

const Row = styled.span`
    font-family: "Phudu";
    font-weight: 1000;
    font-size: 5rem;
    margin: 5px;
    @media (max-width: 1000px) {
        font-size: 4rem;
    }
    @media (max-width: 800px) {
        font-size: 3rem;
    }
    @media (max-width: 600px) {
        font-size: 2.5rem;
    }
    @media (max-width: 550px) {
        font-size: 2rem;
    }
    @media (max-width: 450px) {
        letter-spacing: 0.1rem;
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
        <TextWrap>
            <Row>
                TURNING WOOD BYPRODUCTS
            </Row> 
            <Row>
                INTO TIMELESS PIECES
            </Row>
            <Link to="/contact-us" onClick={CTAClick("/contact-us", updateCurrentURL)}>
                <CTA>CONTACT US FOR MORE INFO</CTA>
            </Link>
        </TextWrap>
    </ContactWrapper>
};

/*
<TextWrap>
            <Row>
                WE SUSTAINABLY PRODUCE TIMELESS
            </Row> 
            <Row>
                WOODEN PIECES FROM REVITALIZED WOOD
            </Row>
            <Row>
                BYPRODUCTS, BRINGING THE HEART OF THE
            </Row>
            <Row>
                FOREST TO THE HEART OF YOUR HOME.
            </Row>
            <Link to="/contact-us" onClick={CTAClick("/contact-us", updateCurrentURL)}>
                <CTA>CONTACT US</CTA>
            </Link>
        </TextWrap>
<TextWrap>
            <Row>
                THE FOLLOWING ARE SAMPLE PRODUCTS
            </Row> 
            <Row>
                FOR MORE INFORMATION AND PRICING
            </Row>
            <Link to="/contact-us" onClick={CTAClick("/contact-us", updateCurrentURL)}>
                <CTA>CONTACT US</CTA>
            </Link>
        </TextWrap>
*/