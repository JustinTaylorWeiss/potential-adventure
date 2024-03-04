import styled, { keyframes } from "styled-components";
import logo from "./assets/whiteLogo.png";
import { Button, TopLogo } from "../../globalComponents";
import { Gallery } from "../../components/gallery";
import { Link } from "react-router-dom";
import { useURL } from "../../contexts/useURL";

const LandingTileWrap = styled.div`
    position: relative;
    width: 100vw;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 50px;
    padding: 0;
    color: oldlace;
    font-weight: 400;
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
    @media (max-width: 750px) {
        top: 55%;
    }
`;

const CTA = styled(Button)`
    margin-top: 20px;
    background-color: oldlace;
    border-color: oldlace;
    color: #101012;
    padding: 20px 40px;
    &:active {
        padding: 15px 20px;
        margin-top: 25px;
        margin-bottom: 5px;
    }
    @media (max-width: 1000px) {
        padding: 15px 30px;
        &:active {
            padding: 10px 15px;
        }
    }
    @media (max-width: 750px) {
        font-size: 1.25rem;
        letter-spacing: 0.2rem;
    }
    @media (max-width: 550px) {
        padding: 10px 20px;
        margin-top: 0px;
        &:active {
            padding: 5px 10px;
            margin-top: 5px;
        }
    }
    @media (max-width: 450px) {
        letter-spacing: 0;
    }
    /*
    @media (max-width: 1000px) {
        font-size: 1.2rem;
        padding: 20px 20px;
        &:active {
            padding: 15px 15px;
        }
    }
    @media (max-width: 800px) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        margin-top: 20px;
        padding: 15px 10px;
        &:active {
            padding: 10px 5px;
            margin-top: 25px;
        }
    }
    @media (max-width: 600px) {
        font-size: 0.8rem;
        border-width: 2px;
    }
    @media (max-width: 500px) {
        margin-top: 15px;
        padding: 13px 10px;
        &:active {
            padding: 10px 5px;
            margin-top: 18px;
        }
    }
    */
`;

const Row = styled.span`
    font-weight: 800;
    letter-spacing: 0.2rem;
    font-size: 9rem;
    font-family: "Phudu";
    @media (max-width: 1000px) {
        font-size: 7rem;
    }
    @media (max-width: 750px) {
        font-size: 6rem;
    }
    @media (max-width: 550px) {
        font-size: 5rem;
    }
    @media (max-width: 450px) {
        font-size: 4rem;
    }
    /*
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
    }
    @media (max-width: 450px) {
        //font-size: 0.6rem;
    }
    */
`;

const SmallRow = styled.span`
    margin-bottom: 10px;
    font-weight: 800;
    letter-spacing: 0.2rem;
    font-size: 2rem;
    @media (max-width: 1000px) {
        font-size: 1.5rem;
    }
    @media (max-width: 750px) {
        font-size: 1.25rem;
        letter-spacing: 0.1rem;
    }
    @media (max-width: 550px) {
        font-size: 1.1rem;
    }
    @media (max-width: 450px) {
        letter-spacing: 0;
    }
`;

const Logo = styled(TopLogo)`
    @media (max-width: 550px) {
        width: 20%;
    }
`;

const ListItem = styled.a`
    display: inline-block;
    margin-bottom: 10px;
    font-weight: 1000;
    position: relative;
    text-decoration: none;
    user-select: none;
    color: oldlace;
    &:hover {
        cursor: pointer;
    }
    // Underline Hover
    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        border-radius: 30%;
        height: 4px;
        bottom: -7px;
        left: 0;
        background-color: oldlace;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
    &:hover::before {
        transform: scaleX(1);
    }
`;

/*
const Script = styled.span`
    font-family: "League Script", serif;
    font-weight: bold;
    font-size: 4rem;
    @media (max-width: 1000px) {
        font-size: 3.5rem;
    }
    @media (max-width: 800px) {
        font-size: 2.5rem;
    }
    @media (max-width: 450px) {
        font-size: 1.75rem;
    }
`;
*/

const CTAClick = (url, update) => () => {
    document.getElementById("AppWrap").scrollTo(0, 0);
    update(url);
}

export const LandingFirstTile = () => {

    const { updateCurrentURL } = useURL();

    return <LandingTileWrap>
        <Logo src={logo} draggable="false"/>
        <Gallery/>
        <TextWrap>
            <Row>
                WE GOT WOOD
            </Row>
            <SmallRow>
                Contact us for same day delivery <ListItem>(718)486-2800</ListItem>
            </SmallRow>
            <Link to="/our-products" onClick={CTAClick("/our-products", updateCurrentURL)}>
                <CTA>SEE OUR GALLERY</CTA>
            </Link>
        </TextWrap>
    </LandingTileWrap>  
};

/*
const Script = styled.span`
    font-family: "League Script", serif;
    font-weight: bold;
    font-size: 4rem;
    @media (max-width: 1000px) {
        font-size: 3.5rem;
    }
    @media (max-width: 800px) {
        font-size: 2.5rem;
    }
    @media (max-width: 450px) {
        font-size: 1.75rem;
    }
`;

const Row = styled.span`
    filter: drop-shadow(1px 1px 0px black);
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
    }
    @media (max-width: 450px) {
        //font-size: 0.6rem;
    }
`;

<TextWrap>
            <Row> 
                WE SUSTAINABLY PRODUCE
                <Script draggable="false">&nbsp;timeless&nbsp;</Script>
            </Row> 
            <Row>
                WOODEN PIECES FROM
                <Script draggable="false">&nbsp;revitalized&nbsp;</Script>
                WOOD
            </Row>
            <Row>
                BYPRODUCTS, BRINGING THE
                <Script draggable="false">&nbsp;heart&nbsp;</Script>
                OF THE
            </Row>
            <Row>
                FOREST TO THE
                <Script draggable="false">&nbsp;heart&nbsp;</Script> 
                OF YOUR HOME.
            </Row>
            <Link to="/our-products" onClick={CTAClick("/our-products", updateCurrentURL)}>
                <CTA $light>SEE OUR GALLERY</CTA>
            </Link>
        </TextWrap>
*/