import styled from "styled-components";

const AboutWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 2.5rem;
`;

const Script = styled.span`
    font-family: "Dancing Script", serif;
`;

export const LandingAboutTile = () => (
    <AboutWrapper>
        We have 
        <Script draggable="false">&nbsp;&nbsp;Script</Script>
    </AboutWrapper>
);