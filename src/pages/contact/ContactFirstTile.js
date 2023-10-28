import styled from "styled-components";

const ContactWrapper = styled.div`
    font-family: "Sometype Mono", sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 2.5rem;
`;

const Script = styled.span`
    font-family: "Dancing Script", serif;
`;

export const ContactFirstTile = () => (
    <ContactWrapper>
        Contact Us
        <Script>&nbsp;&nbsp;This is how you can contact us</Script>
    </ContactWrapper>
);