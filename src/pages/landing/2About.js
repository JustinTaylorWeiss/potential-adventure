import styled from "styled-components";
import { Button } from "../../globalComponents";

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 2.5rem;
    padding: 40px 0;
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`;

const CTA2 = styled(Button)`
    margin-top: 50px;
    filter: drop-shadow(0px 0px 0px black);
    &:active {
        padding: 20px 15px;
        margin-top: 55px;
        margin-bottom: 5px;
    }
`;

const Row = styled.span`
    filter: drop-shadow(1px 1px 0.5px black);
`;

const Script = styled.span`
    font-family: "League Script", serif;
    font-weight: bold;
    font-size: 4rem;
`;


export const LandingAboutTile = () => {

    return <AboutWrapper>
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
        </TextWrap>
        <CTA2>Learn More</CTA2>
    </AboutWrapper>
};