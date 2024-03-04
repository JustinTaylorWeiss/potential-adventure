import styled from "styled-components";
import logo from "./assets/blackLogo.png";
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
    padding: 0 0 0 0;
    background-color: "white";
`;

const Bar = styled.img`
    width: 80%;
    height: 10px;
    filter: drop-shadow(1px 1px 0.5px black);
    @media (max-width: 800px) {
        height: 5px;
    }
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    max-width: 300px;
    filter: drop-shadow(0.5px 0.5px 0.5px black);
`;

const Row = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 2fr 5fr 2fr;
    grid-template-rows: 1fr;
    width: 70%;
    margin: 60px 0;
    @media (max-width: 1200px) {
        grid-template-columns: 1fr 3fr;
    }
    @media (max-width: 800px) {
        grid-template-columns: 2fr 3fr;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        margin: 20px;
    }
`;

const InnerRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Column = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        width: auto;
        font-size: 2rem;
    }
`;

const LI = styled.a`
    font-size: 1.5rem;
    margin: 1px 0;
    width: 100%;
    text-align: right;
    letter-spacing: 0.2rem;
    text-decoration: none;
    color: black;
    filter: drop-shadow(0.5px 0.5px 0.1px black);
    &:hover {
        color: white;
    }
    @media (max-width: 2000px) {
        font-size: 1.2rem;
    }
    @media (max-width: 1800px) {
        font-size: 1rem;
    }
    @media (max-width: 1600px) {
        font-size: 0.8rem;
    }
    @media (max-width: 1300px) {
        font-size: 0.7rem;
    }
    @media (max-width: 500px) {
        font-size: 1rem;
        text-align: center;
        margin: 8px 0;
    }
`;

const FootLink = styled(Link)`
    font-size: 0.9rem;
    filter: drop-shadow(0.5px 0.5px 0.1px black);
    text-decoration: none;
    color: ${props => props.$highlight ? "white" : "black"};
    &:hover {
        ${props => props.$highlight ? "cursor: default" : ""};
    }
    @media (min-width: 2000px) {
        font-size: 1.5rem;
    }
    @media (min-width: 700px) {
        filter: drop-shadow(0px 0px 0px black);
        font-weight: 800;
    }
`;

const Spacer = styled.span`
    font-size: 0.9rem;
    cursor: default;
    filter: drop-shadow(0.5px 0.5px 0.1px black);
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
                    551 STEWART AVE, BROOKLYN, NY
                </LI>
            </Column>
        </Row>
    </AboutWrapper>
};

//, ["-"], ["OUR STORY", "/our-story"]