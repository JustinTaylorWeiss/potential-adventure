import { styled, keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import background from './assets/menuWood.jpg';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

const menuSlideIn = keyframes`
    0% { left: -500px }
    100% { left: 0px }
`;

const menuSlideOut = keyframes`
    100% { left: -500px }
    0% { left: 0px }
`;

const closeSpin = keyframes`
    0% {transform: rotate(-360deg);}
    100% {transform: rotate(0deg);}
`;

const MenuWrap = styled.div`
    position: absolute;
    width: 500px;
    height: 100%;
    z-index: 2;
    left: ${props => props.$close ? "-500px" : "0"}; //If menu is closed put off screen
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 100px;
    background-image: url(${background});
    background-size: cover;
    filter: drop-shadow(0px 0px 10px black);

    animation: ${props => props.$close ? menuSlideOut : menuSlideIn}; //If menu is closed move to off screen 
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
`;

const whiteToBlack = keyframes`
    0% {
        color: white;
    }
    100% {
        color: black;
    }
`;

const Close = styled(CloseIcon)`
    color: black;
    position: absolute;
    top: 10px;
    right: 0;
    margin: 0 20px;
    border-radius: 10px;
    z-index: 0;
    filter: drop-shadow(1px 1px 0.5px black);
    &:hover {
        cursor: pointer;
    }
    &:active {
        top: 12.5px;
        right: 2.5px;
    }
`;

const LinkList = styled.div`
    padding-top: 100px;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: "roboto", sans-serif;
    letter-spacing: 0.5rem;
    font-size: 1.75rem;
    pointer-events: none;
    z-index: 5;
`;

const ListItem = styled(Link)`
    display: inline-block;
    pointer-events: auto;
    margin: 10px 0;
    z-index: 5;
    font-size: 1.75rem;
    position: relative;
    text-decoration: none;
    user-select: none;
    color: ${props => props.$highlight ? "white" : "black"};
    filter: drop-shadow(1px 1px 0.5px black);
    &:hover {
        cursor: ${props => props.$highlight ? "default" : "pointer"};
    }

    //"#e0db72"

    // Underline Hover
    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        border-radius: 40%;
        height: 1px;
        bottom: -2px;
        left: 0;
        background-color: black;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
    &:hover::before {
        ${props => props.$highlight ? "" : "transform: scaleX(1)"};
    }
`;

//animation: ${closeSpin};
//animation-duration: 0.5s;
//animation-timing-function: ease-in-out;

export const Menu = ({menuClick, close}) => {

    const [currentURL, updateCurrentURL] = useState("/");

    useEffect(() => {
        updateCurrentURL(window.location.pathname)
    }, [])

    const linkClick = (url) => () => {
        if(url !== "/") {
            updateCurrentURL(url)
        }
        menuClick();
    }

    return <MenuWrap $close={close}>
        <Close sx={{ fontSize: 45, '&:active': { fontSize: 40} }} onClick={() => menuClick()}/>
        <LinkList>
            {
                [["HOME", "/"], ["OUR STORY", "/our-story"], ["OUR PRODUCTS", "/our-products"], ["CONTACT US", "/contact-us"], ].map(([location, url], i) => {
                    return <ListItem 
                        key={`ListItem-${i}`}
                        to={url}
                        onClick={linkClick(url)}
                        $highlight={currentURL === url}
                    >{location}</ListItem>;
                })
            }
        </LinkList>
    </MenuWrap>
};

//["Shop", "/shop"]