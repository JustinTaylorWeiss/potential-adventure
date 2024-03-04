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
    font-size: 1rem;
    letter-spacing: 0.2rem;
    filter: drop-shadow(0px 0px 0px black);
    padding: 20px 15px;
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
    filter: drop-shadow(1px 1px 0.5px black);
    margin: 8px 0;
    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
    @media (max-width: 700px) {
        font-size: 1rem;
    }
    @media (max-width: 500px) {
        filter: drop-shadow(0.5px 0.5px 0px black);
        letter-spacing: 0.2rem;
        font-size: 0.7rem;
        margin: 4px;
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
                INFINITY LUMBER IS A WOMAN-OWNED LUMBERYARD
            </Row> 
            <Row>
                SPECIALIZED IN SOURCING CONSTRUCTION LUMBER AND 
            </Row>
            <Row> 
                HARDWOOD PRODUCTS IN THE HEART OF BROOKLYN, NY.
            </Row>
        </TextWrap>
        <Link to="/contact-us" onClick={CTAClick("/contact-us", updateCurrentURL)}>
            <CTA2>CONATACT US</CTA2>
        </Link>
    </AboutWrapper>
};