import styled from "styled-components";
import { Button, TopLogo } from "../../globalComponents";
import { useEffect, useRef, useState } from "react";
import logo from "./assets/blackLogo.png";
import { useMediaQuery } from "react-responsive";

const ContactWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 142px);
    @media (max-height: 900px) {
        height: auto;
    }
    @media (max-width: 1000px) {
        height: auto;
    }
`;

const Grid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    width: 100vw;
    font-size: 1.5rem;
    margin: 0;
    font-weight: 400;
    color: black;
    @media (max-height: 900px) {
        position: static;
        height: auto;
        grid-template-columns: 1fr;
    }
    @media (max-width: 1000px) {
        position: static;
        height: auto;
        grid-template-columns: 1fr;
    }
    @media (max-width: 550px) {
        margin: 5% 0;
    }
`;

const TextWrap = styled.div`
    display: inline-block;
    left: 12.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: flex-start;
    margin-left: 25%;
    @media (max-width: 1400px) {
        margin-left: 15%;
    }
    @media (max-height: 900px) {
        margin-left: 0;
        padding: 15% 0 7.5%;
        justify-self: center;
    }
    @media (max-width: 1000px) {
        margin-left: 0;
        padding: 15% 0 7.5%;
        justify-self: center;
    }
`;

const Row = styled.span`
    font-size: 2rem;
    width: 100%;
    margin: 10px;
    text-align: left;
    font-weight: 800;
    @media (max-height: 1100px) {
        font-size: 1.5rem;
    }
    @media (max-height: 900px) {
        font-size: 2rem;
    }
    @media (max-width: 550px) {
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
    }
`;

const MapFrame = styled.iframe`
    height: 700px;
    width: 85%;
    border: 2px solid black;
    justify-self: flex-end;
    margin-right: 25%;
    @media (max-height: 1100px) {
        height: 500px;
    }
    @media (max-width: 1400px) {
        margin-right: 15%;
    }
    @media (max-height: 900px) {
        margin-right: 0;
        justify-self: center;
        width: 40%;
        margin-bottom: 8%;
        aspect-ratio: 1;
        height: auto;
    }
    @media (max-width: 1000px) {
        margin-right: 0;
        justify-self: center;
        width: 40%;
        margin-bottom: 8%;
        aspect-ratio: 1;
        height: auto;
    }
    @media (max-width: 550px) {
        width: 80%;
    }
`;

const TextAnchor = styled.a`
    text-decoration: none;
    font-size: 2rem;
    color: black;
    font-weight: 600;
    &:hover {
        color: #d49d04;
    }
    @media (max-height: 1100px) {
        font-size: 1.75rem;
    }
    @media (max-height: 900px) {
        font-size: 2rem;
    }
    @media (max-width: 550px) {
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
    }
`;

const Text = styled.span`
    text-decoration: none;
    font-size: 2rem;
    color: black;
    font-weight: 600;
    @media (max-height: 1100px) {
        font-size: 1.75rem;
    }
    @media (max-height: 900px) {
        font-size: 2rem;
    }
    @media (max-width: 550px) {
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
    }
`

const SmallText = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    color: black;
    @media (max-width: 700px) {
        font-size: 1rem;
    }
`;

const Spacer = styled.div`
    height: 40px;
    @media (max-height: 1100px) {
        height: 30px;
    }
    @media (max-height: 900px) {
        height: 40px;
    }
    @media (max-width: 700px) {
        height: 40px;
    }
    @media (max-width: 550px) {
        height: 30px;
    }
`;

const SubRow = styled.div`
    display: block;
    line-height: 200%;
`;

export const InfoTile = () => {

    useEffect(() => {
        const initMap = () => console.log("Google Maps API loaded.");
        window.initMap = initMap;
    },[]) 

    return <ContactWrapper>
        <TopLogo src={logo}/>
        <Grid>
            <TextWrap>
                <Row> BUSINESS HOURS: </Row> 
                <Row>
                    <Text>
                        24/7
                    </Text>
                </Row>
                <Spacer/>
                <Row> CALL OR TEXT ANY TIME: </Row> 
                <Row>
                    <TextAnchor href="tel:17184862800">
                        {` (718)486-2800`}
                        <SmallText>{` - Primary`}</SmallText>
                    </TextAnchor>
                </Row>
                <Row>
                    <TextAnchor href="tel:15163820939">
                        {` (516)382-0939`}
                        <SmallText>{` - Mobile`}</SmallText>
                    </TextAnchor>
                </Row> 
                <Spacer/>
                <Row> EMAIL: </Row> 
                <Row>
                    <TextAnchor href="mailto:michelle@infinitylumber.com">
                        michelle@infinitylumber.com
                    </TextAnchor>
                </Row>
                <Spacer/>
                <Row> VISIT: </Row> 
                <Row>
                    <TextAnchor target="_blank" href="https://www.google.com/maps/place/Infinity+Building+Supplies/@40.7263429,-73.9341559,17z/data=!4m6!3m5!1s0x89c25eb51cebd44f:0x9511fe7d92b5752b!8m2!3d40.7260486!4d-73.9338672!16s%2Fg%2F1thq1mm2?entry=ttu">
                        551 Stewart Ave,
                        <SubRow>Brooklyn, NY 11222</SubRow>
                    </TextAnchor>
                </Row> 
                <Spacer/>
                <Row> FAX: </Row> 
                <Row>
                    <Text>
                        {` (718)486-2801`}
                    </Text>
                </Row> 
            </TextWrap>
            <MapFrame
                height="500px"
                width="500px"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAc1xZ868G0r_fb9sq4nSQnQPA1ngA2J54
                    &q=Infinity+Building+Supplies,Brooklyn+NY&zoom=13">
            </MapFrame>
        </Grid>
    </ContactWrapper>
};