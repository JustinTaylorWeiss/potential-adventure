import styled from "styled-components";
import logo from "./assets/blackLogo.png";
import line from "./assets/line.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    padding: 80px 0 0 0;
    background-color: "white";
`;

const Bar = styled.img`
    width: 80%;
    height: 10px;
    filter: drop-shadow(1px 1px 0.5px black);
`;

const Logo = styled.img`
    width: 15%;
    filter: drop-shadow(0px 0px 1px black);
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    width: 70%;
    margin: 60px 0;
`;

const InnerRow = styled(Row)`
    justify-content: center;
    width: auto;
    height: auto;
    margin: 0;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 20%;
`;

const LI = styled.span`
    font-size: 0.9rem;
    margin: 1px 0;
    filter: drop-shadow(0.5px 0.5px 0.1px black);
`;

const FootLink = styled(Link)`
    font-size: 0.9rem;
    filter: drop-shadow(0.5px 0.5px 0.1px black);
    text-decoration: none;
    color: ${props => props.$highlight ? "white" : "black"};
    &:hover {
        color: white;
    }
`;

const Spacer = styled.span`
    font-size: 0.9rem;
    filter: drop-shadow(0.5px 0.5px 0.1px black);
`;


export const FooterWrapper = () => {

    const [currentURL, updateCurrentURL] = useState("/");

    useEffect(() => {
        updateCurrentURL(window.location.pathname)
    }, [])

    const linkClick = (url) => () => {
        if(url !== "/") {
            updateCurrentURL(url)
        }
    }

    return <AboutWrapper>
        <Bar src={line}/>
        <Row>
            <Logo src={logo} draggable="false"/>
            <InnerRow>
                {
                    [["HOME", "/"], ["-"], ["OUR STORY", "/our-story"], ["-"], ["OUR PRODUCTS", "/our-products"], ["-"], ["CONTACT US", "/contact-us"], ].map(([location, url], i) => {
                        return location !== "-"
                            ? <FootLink 
                                key={`ListItem-${i}`}
                                to={url}
                                onClick={linkClick(url)}
                                $highlight={currentURL === url}
                            >{location}</FootLink>
                            : <Spacer key={`Spacer-${i}`}>&nbsp;-&nbsp;</Spacer>
                    })
                }   
            </InnerRow>
            <Column>
                <LI>(516) 382-0939</LI>
                <LI>MICHELLE@INFINITYLUMBER.COM</LI>
                <LI>551 STEWART AVE, BROOKLYN, NY 11222</LI>
            </Column>
        </Row>
    </AboutWrapper>
};