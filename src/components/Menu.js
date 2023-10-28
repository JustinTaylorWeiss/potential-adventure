import { styled, keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import background from './assets/woodBackground.jpg';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

const menuSlideIn = keyframes`
    0% { left: -40vw }
    100% { left: 0px }
`;

const menuSlideOut = keyframes`
    100% { left: -40vw }
    0% { left: 0px }
`;

const closeSpin = keyframes`
    0% {transform: rotate(-360deg);}
    100% {transform: rotate(0deg);}
`;

const MenuWrap = styled.div`
    position: absolute;
    width: 25vw;
    height: 100%;
    left: ${props => props.close ? "-40vw" : "0"}; //If menu is closed put off screen
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    animation: ${props => props.close ? menuSlideOut : menuSlideIn}; //If menu is closed move to off screen 
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
`;

const BackgroundImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100vh;
    filter: drop-shadow(5px 0px 15px black);
`;

const Close = styled(CloseIcon)`
    color: black;
    position: absolute;
    top: 10px;
    left: 0;
    margin: 0 20px;
    z-index: 0;
    &:hover {
        cursor: pointer;
        color: brown;
    }
`;

const LinkList = styled.div`
    padding-top: 75px;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    pointer-events: none;
    z-index: 5;
`;

const ListItem = styled(Link)`
    display: inline-block;
    pointer-events: auto;
    margin: 20px 0;
    z-index: 5;
    font-size: 40px;
    position: relative;
    text-decoration: none;
    user-select: none;
    color: ${props => props.highlight ? "brown" : "black"};
    &:hover {
        cursor: ${props => props.highlight ? "default" : "pointer"};
    }

    // Underline Hover
    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
    &:hover::before {
        ${props => props.highlight ? "" : "transform: scaleX(1)"}
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


    return <MenuWrap close={close}>
        <BackgroundImg src={background} draggable="false"/>
        <Close sx={{ fontSize: 60 }} onClick={() => menuClick()}/>
        <LinkList>
            {
                [["Home", "/"], ["About", "/about"], ["Contact", "/contact"], ["Shop", "/shop"]].map(([location, url]) => {
                    return <ListItem 
                        to={url}
                        onClick={()=>{updateCurrentURL(url)}}
                        highlight={currentURL === url}
                    >{location}</ListItem>;
                })
            }
        </LinkList>
    </MenuWrap>
};