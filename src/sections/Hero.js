import styled from "styled-components";
import bridge from "../assets/bridge.png";
import { InkButton, HandNote, Art } from "./shared";
import { InkArrowDown, InkArrowCurl, Stamp, Underlined } from "../components/ink";

const HeroWrap = styled.section`
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    padding: clamp(40px, 6vh, 90px) clamp(22px, 5vw, 48px) 20px;
    min-height: calc(100svh - 78px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* #top jumps land at the true top of the page, nav included */
    scroll-margin-top: 120px;
`;

const Eyebrow = styled.p`
    margin: 0 0 10px;
    font-family: "Newsreader", serif;
    font-weight: 700;
    font-size: clamp(0.9rem, 1.4vw, 1.05rem);
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--ink-soft);
`;

const HeroGrid = styled.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: clamp(18px, 2.5vw, 36px);

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`;

/* Mirrored, and oversized past its column so it bleeds off the right gutter. */
const Bridge = styled(Art)`
    width: calc(100% + clamp(24px, 6vw, 86px));
    max-width: 640px;
    justify-self: end;
    margin-right: calc(-1 * clamp(24px, 6vw, 86px));
    transform: scaleX(-1);

    @media (max-width: 760px) {
        justify-self: center;
        width: 100%;
        max-width: 460px;
        margin-right: 0;
        margin-top: 10px;
    }
`;

const H1 = styled.h1`
    margin: 0 0 26px;
    font-weight: 900;
    font-size: clamp(4.1rem, 11.5vw, 11rem);
    line-height: 0.92;
    letter-spacing: -0.02em;
    color: var(--ink);

    span {
        display: block;
        white-space: nowrap;
    }
`;

const Dot = styled.span`
    display: inline !important;
    color: var(--red);
`;

const Sub = styled.p`
    margin: 0 0 40px;
    max-width: 46ch;
    font-size: clamp(1.15rem, 1.8vw, 1.45rem);
    line-height: 1.55;
    color: var(--ink-soft);

    em {
        font-style: italic;
    }
`;

const CTARow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 26px;
`;

const Note = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;
    color: var(--red);
    transform: rotate(-3deg);

    svg {
        transform: scaleX(-1) rotate(58deg) translate(6px, 2px);
        width: 58px;
        flex: none;
    }
`;

const HeroStamp = styled(Stamp)`
    position: absolute;
    top: clamp(18px, 5vh, 60px);
    right: clamp(22px, 6vw, 70px);

    @media (max-width: 700px) {
        display: none;
    }
`;

const ScrollCue = styled.a`
    position: absolute;
    left: 50%;
    bottom: 18px;
    transform: translateX(-50%);
    color: var(--ink);
    opacity: 0.75;
    transition: opacity 0.2s ease, transform 0.2s ease;

    &:hover {
        opacity: 1;
        transform: translateX(-50%) translateY(3px);
    }

    @media (max-height: 640px) {
        display: none;
    }
`;

export const Hero = () => (
    <HeroWrap id="top">
        <HeroStamp $tilt={5}>Est. Brooklyn, NY<br/>551 Stewart Ave</HeroStamp>
        <HeroGrid>
            <div>
                <Eyebrow>Infinity Lumber · Brooklyn</Eyebrow>
                <H1>
                    <span>WE GOT</span>
                    <span>WOOD<Dot>.</Dot></span>
                </H1>
                <Sub>
                    Heavy construction lumber and hardwood products,
                    delivered <Underlined>same&#8209;day</Underlined> across New York.
                </Sub>
                <CTARow>
                    <InkButton href="tel:17184862800">Call (718) 486-2800</InkButton>
                    <Note>
                        <InkArrowCurl/>
                        <HandNote>call or text —<br/>we're up 24/7</HandNote>
                    </Note>
                </CTARow>
            </div>
            <Bridge src={bridge} alt="Ink drawing of the Brooklyn Bridge" draggable="false"/>
        </HeroGrid>
        <ScrollCue href="#story" aria-label="Scroll down">
            <InkArrowDown/>
        </ScrollCue>
    </HeroWrap>
);
