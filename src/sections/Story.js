import styled from "styled-components";
import board from "../assets/board.png";
import { Section, Kicker, Art } from "./shared";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: clamp(26px, 4vw, 48px);
    align-items: center;

    @media (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`;

const Quote = styled.blockquote`
    position: relative;
    margin: 0;
    font-family: "Fraunces", serif;
    font-weight: 500;
    font-style: italic;
    font-size: clamp(1.55rem, 2.8vw, 2.35rem);
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: var(--ink);
    text-wrap: balance;

    strong {
        font-weight: 700;
        color: var(--red);
    }

    &::before {
        content: "\\201C";
        position: absolute;
        top: -0.28em;
        left: -0.55em;
        font-size: 2.6em;
        font-style: normal;
        font-weight: 900;
        color: var(--red);
        opacity: 0.85;
    }

    @media (max-width: 1320px) {
        &::before {
            position: static;
            display: block;
            line-height: 0.9;
            height: 0.45em;
        }
    }
`;

const Round = styled(Art)`
    width: clamp(190px, 25vw, 330px);
    transform: rotate(-10deg);

    @media (max-width: 820px) {
        justify-self: center;
        width: 220px;
    }
`;

export const Story = () => (
    <Section id="story">
        <Kicker>01 · Who we are</Kicker>
        <Grid>
            <Quote>
                This city is built on heavy timber. Our yard stays stocked
                and we <strong>deliver around the clock</strong> — often
                same or next day.
            </Quote>
            <Round src={board} alt="Ink drawing of an end-grain round" draggable="false"/>
        </Grid>
    </Section>
);
