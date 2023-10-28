import styled from "styled-components";

const AboutWrapper = styled.div`
    font-family: "Sometype Mono", sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 2.5rem;
`;

const Script = styled.span`
    font-family: "Dancing Script", serif;
`;

export const AboutFirstTile = () => (
    <AboutWrapper>
        About stuff
        <Script>&nbsp;&nbsp;Yea this the about section</Script>
    </AboutWrapper>
);