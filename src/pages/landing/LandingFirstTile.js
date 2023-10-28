import styled from "styled-components";
import table from "./assets/table.jpg";

const LandingTileWrap = styled.div`
    width: 100vw;
`;

const BackgroundImg = styled.img`
    width: 100vw;
    z-index: -1;
`;

export const LandingFirstTile = () => (
    <LandingTileWrap>
        <BackgroundImg src={table} draggable="false"/>
    </LandingTileWrap>  
);