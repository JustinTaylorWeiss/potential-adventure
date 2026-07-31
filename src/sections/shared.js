import styled, { css } from "styled-components";
import paper from "../assets/paper.jpg";

/* A raised sheet of paper: the same kraft texture as the page, lightened by a
   translucent wash so the grain still shows through. Flat hex fills on top of
   the textured body read as "texture missing" — always use this instead. */
export const paperSurface = css`
    background-color: var(--paper-raised);
    background-image:
        linear-gradient(rgba(255, 253, 245, 0.6), rgba(255, 253, 245, 0.6)),
        url(${paper});
    background-size: cover;
`;

export const Section = styled.section`
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    padding: clamp(72px, 9vw, 128px) clamp(22px, 5vw, 48px) 0;
    scroll-margin-top: 24px;
`;

/* "02 · The wood" — small red section marker with a trailing rule. */
export const Kicker = styled.p`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0 0 22px;
    font-family: "Newsreader", serif;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--red);

    &::after {
        content: "";
        flex: 0 0 58px;
        height: 2px;
        border-radius: 2px;
        background: currentColor;
        transform: rotate(-1.2deg);
    }
`;

export const H2 = styled.h2`
    margin: 0 0 26px;
    font-family: "Fraunces", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-size: clamp(2.5rem, 5.5vw, 4.4rem);
    line-height: 1.02;
    letter-spacing: -0.015em;
    color: var(--ink);
`;

export const Lede = styled.p`
    margin: 0;
    max-width: 58ch;
    font-size: clamp(1.1rem, 1.5vw, 1.3rem);
    line-height: 1.65;
    color: var(--ink-soft);
`;

/* Red handwriting for margin notes. */
export const HandNote = styled.span`
    font-family: "Caveat", cursive;
    font-weight: 600;
    font-size: clamp(1.35rem, 2vw, 1.6rem);
    line-height: 1.25;
    letter-spacing: 0;
    color: var(--red);
`;

/* Hand-drawn button: wonky radius, hard red offset shadow, fills with ink on hover. */
export const InkButton = styled.a`
    display: inline-block;
    font-family: "Fraunces", serif;
    font-weight: 800;
    font-size: clamp(0.95rem, 1.3vw, 1.1rem);
    letter-spacing: 0.07em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--ink);
    ${paperSurface}
    border: 2.5px solid var(--ink);
    border-radius: 255px 18px 225px 18px / 18px 225px 18px 255px;
    padding: 16px 28px 15px;
    box-shadow: 5px 6px 0 -1px var(--red);
    cursor: pointer;
    transition: transform 0.13s ease, box-shadow 0.13s ease, background-color 0.13s ease, color 0.13s ease;

    &:hover {
        background: var(--ink);
        color: var(--paper);
        transform: translate(-1px, -2px);
        box-shadow: 7px 9px 0 -1px var(--red);
    }
    &:active {
        transform: translate(3px, 4px);
        box-shadow: 1px 1px 0 -1px var(--red);
    }
`;

/* Ink art sits on the paper like it was printed there. */
export const Art = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    mix-blend-mode: multiply;
    filter: contrast(1.02);
`;
