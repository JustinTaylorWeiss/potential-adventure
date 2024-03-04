import styled, { keyframes } from "styled-components";
import React from "react";
import arrow from "./assets/arrow.svg";
import slab1 from "./assets/slab1.jpg";
import slab2 from "./assets/slab2.jpg";
import slab3 from "./assets/slab3.jpg";
import slab4 from "./assets/slab4.jpg";
import board1 from "./assets/board1.jpg";
import board2 from "./assets/board2.jpg";
import board3 from "./assets/board3.jpg";
import board4 from "./assets/board4.jpg";
import construction1 from "./assets/construction1.jpg";
import construction2 from "./assets/construction2.jpg";
import construction3 from "./assets/construction3.jpg";
import construction4 from "./assets/construction4.jpg";

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    margin: 50px 0;
`;

const SubTitle = styled.h3`
    font-weight: 800;
    letter-spacing: 0.3rem;
    font-size: 2.5rem;
    margin: 15px 0 0 50px;
    color: #101012;
    width: 100%;
    max-width: 2000px;
    @media (max-width: 550px) {
        font-size: 2rem;
    }
    @media (max-width: 475px) {
        letter-spacing: 0.2rem;
        margin-left: 30px;
        font-size: 1.5rem;
    }
`;

const RowWrap = styled.div`
    position: relative;
    display: block;
    width: 100%;
    max-width: 2000px;
`;

const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    width: 100%;
    overflow-y: scroll;
    scrollbar-color: #101012 transparent;
`;

const Arrow = styled.img`
    transform: translate(0, -50%) rotate(${props => props.$right ? "180deg" : "0deg"});
    position: absolute;
    top: 50%;
    z-index: 2;
    color: oldlace;
    padding: 30px 0;
    height: 30%;
    min-height: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4%;
    ${props => props.$right ? "left: 15px" : "right: 15px"};
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 1300px) {
        padding: 20px 0;
    }
    @media (max-width: 1000px) {
        padding: 10px 0;
        height: 40%;
    }
    @media (max-width: 700px) {
        display: none;
    }
`;

const IMG = styled.img`
    box-sizing: border-box;
    width: 40vw;
    margin: 10px;
`;

const arrowClick = (index, sampleImg, right = false) => () => {
    const target = document.getElementById(`Row-${index}`);
    target.scrollBy({
        top: 0,
        left: (sampleImg.current.clientWidth + 20) * (right ? -1 : 1),
        behavior: "smooth",
    });
}

const Spacer = styled.div`
    width: 100%;
    height: 50px;
`;

export const Woods = () => {

    const imgRef = React.useRef();

    return <AboutWrapper>
        {
            [[[slab1, slab2, slab3, slab4], "SLABS"], [[board1, board2, board3, board4], "CHARCUTERIE BOARDS"], [[construction1, construction2, construction3, construction4], "HEAVY CONSTRUCTION LUMBER"]].map(([img, name], i) => <React.Fragment key={`Fragment-${i}`}>
                <SubTitle key={`Title-${i}`}>{name}</SubTitle>
                <RowWrap>
                    <Row id={`Row-${i}`}>
                        <Arrow src={arrow} onClick={arrowClick(i, imgRef)}/>
                        <Arrow src={arrow} $right onClick={arrowClick(i, imgRef, true)}/>
                        {
                            Array(4).fill(0).map((_, i) => (
                                i === 0 
                                    ? <IMG ref={imgRef} draggable={false} key={`Slab-${i}`} src={img[i] ?? img[0]}/>
                                    : <IMG draggable={false} key={`Slab-${i}`} src={img[i] ?? img[0]}/>
                            ))
                        }
                    </Row>
                </RowWrap>
                <Spacer/>
            </React.Fragment>)
        }
    </AboutWrapper>
};