import styled from "styled-components";
import { Button } from "../../globalComponents";
import { useEffect, useRef, useState } from "react";


const ContactWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height: 80vh;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: black;
    @media (max-width: 1300px) {
        position: static;
        height: auto;
        grid-template-columns: 1fr;
        margin-bottom: 5%;
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
    @media (max-width: 1300px) {
        margin-left: 0;
        padding: 5% 0;
        justify-self: center;
    }
`;

const Row = styled.span`
    filter: drop-shadow(0.5px 0.5px 0.5px black);
    font-size: 1.75rem;
    width: 100%;
    margin: 10px;
    text-align: left;
    @media (max-width: 700px) {
        filter: drop-shadow(0px 0px 0px black);
        font-weight: 800;
        font-size: 1.5rem;
    }
    @media (max-width: 550px) {
        font-size: 1.2rem;
    }
    @media (max-width: 450px) {
        font-size: 1rem;
    }
`;

const MapFrame = styled.iframe`
    height: 700px;
    width: 75%;
    border: 2px solid black;
    filter: drop-shadow(1px 1px 1px black);
    justify-self: flex-end;
    margin-right: 25%;
    @media (max-width: 1300px) {
        margin-right: 0;
        justify-self: center;
        width: 60%;
        aspect-ratio: 1;
        height: auto;
    }
`;

const TextAnchor = styled.a`
    text-decoration: none;
    font-size: 2rem;
    color: black;
    &:hover {
        color: white;
    }
    @media (max-width: 700px) {
        letter-spacing: 0.2rem;
        font-size: 1.75rem;
    }
    @media (max-width: 550px) {
        font-size: 1.5rem;
    }
    @media (max-width: 450px) {
        font-size: 1.2rem;
    }
`;

const Text = styled.span`
    text-decoration: none;
    font-size: 2rem;
    color: black;
    @media (max-width: 700px) {
        letter-spacing: 0.2rem;
        font-size: 1.75rem;
    }
    @media (max-width: 550px) {
        font-size: 1.5rem;
    }
    @media (max-width: 450px) {
        font-size: 1.2rem;
    }
`

const SmallText = styled.span`
    font-size: 1.2rem;
    filter: drop-shadow(0px 0px 0px black);
    color: black;
    @media (max-width: 700px) {
        font-size: 1rem;
    }
    @media (max-width: 550px) {
        font-size: 0.75rem;
    }
`;

const Spacer = styled.div`
    height: 80px;
    @media (max-width: 700px) {
        height: 40px;
    }
    @media (max-width: 450px) {
        height: 30px;
    }
`;

export const InfoTile = () => {

    useEffect(() => {
        const initMap = () => console.log("Google Maps API loaded.");
        window.initMap = initMap;
    },[]) 

    return <ContactWrapper>
        <TextWrap>
            <Row> CALL OR TEXT US ANY TIME: </Row> 
            <Row><TextAnchor href="tel:17184862800">
                {` (718)486-2800`}
                <SmallText>{` - PRIMARY`}</SmallText>
            </TextAnchor></Row>
            <Row><TextAnchor href="tel:15166504772">
                {` (516)650-4772`}
                <SmallText>{` - MOBILE`}</SmallText>
            </TextAnchor></Row> 
            <Row><TextAnchor href="tel:15163820939">
                {` (516)382-0939`}
                <SmallText>{` - MOBILE`}</SmallText>
            </TextAnchor></Row> 
            <Spacer/>
            <Row> EMAIL US: </Row> 
            <Row><TextAnchor href="mailto:michelle@infinitylumber.com">
                MICHELLE@INFINITYLUMBER.COM
            </TextAnchor></Row>
            <Spacer/>
            <Row> VISIT US: </Row> 
            <Row><TextAnchor target="_blank" href="https://www.google.com/maps/place/Infinity+Building+Supplies/@40.7263429,-73.9341559,17z/data=!4m6!3m5!1s0x89c25eb51cebd44f:0x9511fe7d92b5752b!8m2!3d40.7260486!4d-73.9338672!16s%2Fg%2F1thq1mm2?entry=ttu">
                551 STEWART AVE, BROOKLYN, NY
            </TextAnchor></Row> 
            <Spacer/>
            <Row> FAX US: </Row> 
            <Row><Text>
                {` (718)486-2801`}
            </Text></Row> 
        </TextWrap>
        <MapFrame
            height="500px"
            width="500px"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAc1xZ868G0r_fb9sq4nSQnQPA1ngA2J54
                &q=Infinity+Building+Supplies,Brooklyn+NY">
        </MapFrame>
    </ContactWrapper>
};