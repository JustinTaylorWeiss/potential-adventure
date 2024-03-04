import styled from "styled-components";
import line from "./assets/line.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useURL } from "../contexts/useURL";
import { useMediaQuery } from 'react-responsive'

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    padding: 0;
`;

const Bar = styled.img`
    width: 80%;
    height: 10px;
    @media (max-width: 800px) {
        height: 5px;
    }
`;

const Row = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    grid-template-columns: 2fr 5fr 2fr;
    grid-template-rows: 1fr;
    width: 70%;
    margin: 30px 0;
`;

const Column = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EXLink = styled.a`
    font-size: 1.5rem;
    margin: 3px 0;
    font-weight: 800;
    width: 100%;
    text-align: right;
    letter-spacing: 0.2rem;
    text-decoration: none;
    color: #101012;
    &:hover {
        color: #d49d04;
    }
    @media (max-width: 700px) {
        font-size: 1rem;
    }
    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
    @media (max-width: 450px) {
        font-size: 0.7rem;
    }
`;

const INLink = styled(Link)`
    font-size: 1.5rem;
    margin: 3px 0;
    font-weight: 800;
    width: 100%;
    text-align: "left";
    letter-spacing: 0.2rem;
    text-decoration: none;
    color: #101012;
    &:hover {
        color: #d49d04;
    }
    @media (max-width: 700px) {
        font-size: 1rem;
    }
    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
    @media (max-width: 450px) {
        font-size: 0.7rem;
    }
`;

const Spacer = styled.span`
    font-size: 1.2rem;
    cursor: default;
    @media (min-width: 2000px) {
        font-size: 1.5rem;
    }
`;


export const Footer = () => {

    const { currentURL, updateCurrentURL }  = useURL();


    const linkClick = (newURL) => () => {
        updateCurrentURL(newURL);
        document.getElementById("AppWrap").scrollTo(0, 0);
    }

    return <AboutWrapper>
        <Bar src={line}/>
        <Row>
            <Column>
                <INLink to="/" onClick={linkClick("/")} draggable={false}>
                    HOME
                </INLink>
                <INLink to="/contact-us" onClick={linkClick("/contact-us")} draggable={false}>
                    CONTACT US
                </INLink>
                <INLink to="/our-products" onClick={linkClick("/our-products")} draggable={false}>
                    OUR PRODUCTS
                </INLink>
            </Column>
            <Column>
                <EXLink href="tel:17184862800" draggable={false}>
                    (718)486-2800
                </EXLink>
                <EXLink href="mailto:michelle@infinitylumber.com" draggable={false}>
                    MICHELLE@INFINITYLUMBER.COM
                </EXLink>
                <EXLink target="_blank" href="https://www.google.com/maps/place/Infinity+Building+Supplies/@40.7263429,-73.9341559,17z/data=!4m6!3m5!1s0x89c25eb51cebd44f:0x9511fe7d92b5752b!8m2!3d40.7260486!4d-73.9338672!16s%2Fg%2F1thq1mm2?entry=ttu" draggable={false}>
                    551 STEWART AVE, BROOKLYN
                </EXLink>
            </Column>
        </Row>
    </AboutWrapper>
};

//, ["-"], ["OUR STORY", "/our-story"]


/*
const Logo = styled.img`
    width: 100%;
    height: 100%;
    max-width: 300px;
`;
const FootLink = styled(Link)`
    font-size: 1.2rem;
    font-weight: 1000;
    text-decoration: none;
    width: 100%;
    color: ${props => props.$highlight ? "#d49d04" : "black"};
    &:hover {
        ${props => props.$highlight ? "cursor: default" : ""};
    }
    @media (min-width: 2000px) {
        font-size: 1.5rem;
    }
    @media (max-width: 700px) {
    }
`;
<AboutWrapper>
        <Bar src={line}/>
        <Row>
            {
                !useMediaQuery({ query:'(max-width: 500px)'}) &&
                <Logo src={logo} draggable="false"/>
            }
            {
                !useMediaQuery({ query:'(max-width: 1200px)'}) && <InnerRow>
                    {
                        [["HOME", "/"], ["-"], ["OUR PRODUCTS", "/our-products"], ["-"], ["CONTACT US", "/contact-us"], ].map(([location, url], i) => {
                            return location !== "-"
                                ? <FootLink 
                                    draggable={false}
                                    key={`ListItem-${i}`}
                                    to={url}
                                    onClick={linkClick(url)}
                                    $highlight={currentURL === url}
                                >{location}</FootLink>
                                : <Spacer key={`Spacer-${i}`}>&nbsp;-&nbsp;</Spacer>
                        })
                    }   
                </InnerRow>
            }
            <Column>
                <LI href="tel:17184862800">
                    (718)486-2800
                </LI>
                <LI href="mailto:michelle@infinitylumber.com">
                    MICHELLE@INFINITYLUMBER.COM
                </LI>
                <LI target="_blank" href="https://www.google.com/maps/place/Infinity+Building+Supplies/@40.7263429,-73.9341559,17z/data=!4m6!3m5!1s0x89c25eb51cebd44f:0x9511fe7d92b5752b!8m2!3d40.7260486!4d-73.9338672!16s%2Fg%2F1thq1mm2?entry=ttu">
                    551 STEWART AVE, BROOKLYN
                </LI>
            </Column>
        </Row>
    </AboutWrapper> 
*/