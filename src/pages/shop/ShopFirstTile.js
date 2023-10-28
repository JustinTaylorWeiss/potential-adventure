import styled from "styled-components";

const ShopWrapper = styled.div`
    font-family: "Sometype Mono", sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 2.5rem;
`;

const Script = styled.span`
    font-family: "Dancing Script", serif;
`;

export const ShopFirstTile = () => (
    <ShopWrapper>
        This is the shop
        <Script>&nbsp;&nbsp;You can buy stuff</Script>
    </ShopWrapper>
);