import { styled, keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import background from './assets/menuWood.jpg';
import CloseIcon from '@mui/icons-material/Close';
import { useURL } from "../contexts/useURL";

const menuSlideIn = keyframes`
    0% { left: -500px }
    100% { left: 0px }
`;

const menuSlideOut = keyframes`
    100% { left: -500px }
    0% { left: 0px }
`;

const MenuWrap = styled.div`
    position: absolute;
    width: 500px;
    height: 100%;
    z-index: 3;
    left: ${props => props.$close ? "-650px" : "0"}; //If menu is closed put off screen
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 100px;
    background-image: url(${background});
    background-size: cover;

    animation: ${props => props.$close ? menuSlideOut : menuSlideIn}; //If menu is closed move to off screen 
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;

    @media (max-width: 600px) {
        width: 100%;
        padding-left: 0;
        left: ${props => props.$close ? "-120%" : "0"};
    }
`;

const Close = styled(CloseIcon)`
    color: #101012;
    position: absolute;
    top: 10px;
    right: 0;
    margin: 0 20px;
    border-radius: 10px;
    z-index: 0;
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
    letter-spacing: 0.5rem;
    font-size: 1.75rem;
    pointer-events: none;
    z-index: 5;
    @media (max-width: 600px) {
        width: 100%;
        align-items: center;
    }
`;

const ListItem = styled(Link)`
    display: inline-block;
    pointer-events: auto;
    margin: 20px 0;
    z-index: 5;
    font-size: 2.5rem;
    font-weight: 1000;
    position: relative;
    text-decoration: none;
    user-select: none;
    color: ${props => props.$highlight ? "#d49d04" : "#101012"};
    &:hover {
        cursor: ${props => props.$highlight ? "default" : "pointer"};
    }
    // Underline Hover
    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        border-radius: 30%;
        height: 5px;
        bottom: -7px;
        left: 0;
        background-color: #101012;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
    &:hover::before {
        ${props => props.$highlight ? "" : "transform: scaleX(1)"};
    }
`;

export const Menu = ({menuClick, close}) => {

    const { currentURL, updateCurrentURL }  = useURL();

    const linkClick = (newURL) => () => {
        updateCurrentURL(newURL)
        document.getElementById("AppWrap").scrollTo(0, 0);
        menuClick();
    }

    return <MenuWrap $close={close}>
        <Close sx={{ fontSize: 45, '&:active': { fontSize: 40} }} onClick={() => menuClick()}/>
        <LinkList>
            {
                [["HOME", "/"], ["OUR PRODUCTS", "/our-products"], ["CONTACT US", "/contact-us"], ].map(([location, url], i) => {
                    return <ListItem 
                        draggable={false}
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
//["OUR STORY", "/our-story"],