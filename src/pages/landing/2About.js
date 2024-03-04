import styled from "styled-components";
import { Button } from "../../globalComponents";
import { Link } from "react-router-dom";
import { useURL } from "../../contexts/useURL";

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.75rem;
    padding: 40px 0;
    padding-bottom: 100px;
    @media (max-width: 700px) {
        padding-bottom: 50px;
    }
    @media (max-width: 600px) {
        padding-top: 0;
    }
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`;

const CTA2 = styled(Button)`
    margin-top: 40px;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    font-weight: 800;
    padding: 25px 40px;
    &:active {
        padding: 15px 10px;
        margin-top: 45px;
        margin-bottom: 5px;
    }
    @media (max-width: 500px) {
        margin-top: 20px;
        font-size: 0.8rem;
        padding: 13px 10px;
        &:active {
            padding: 10px 5px;
            margin-top: 23px;
        }
    }
`;

const Row = styled.span`
    font-weight: 600;
    font-size: 3rem;
    margin: 5px;
    @media (max-width: 800px) {
        filter: drop-shadow(0px 0px 0px black);
        font-weight: 800;
        font-size: 1.5rem;
    }
    @media (max-width: 700px) {
        font-size: 1rem;
    }
    @media (max-width: 500px) {
        filter: drop-shadow(0.5px 0.5px 0px black);
        letter-spacing: 0.1rem;
        font-weight: 400;
        font-size: 1rem;
        margin: 4px;
    }
`;

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

const CTAClick = (url, update) => () => {
    document.getElementById("AppWrap").scrollTo(0, 0);
    update(url);
}


export const LandingAboutTile = () => {

    const { updateCurrentURL } = useURL();

    return <AboutWrapper>
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
            <Link to="/our-products" onClick={CTAClick("/our-products", updateCurrentURL)}>
                <CTA2>SEE OUR GALLERY</CTA2>
            </Link>
        </TextWrap>
    </AboutWrapper>
};

/*
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
                <CTA2>SEE OUR GALLERY</CTA2>
            </Link>
        </TextWrap>
*/