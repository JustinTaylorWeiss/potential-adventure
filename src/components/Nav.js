import styled from "styled-components";
import blackLogo from "../assets/blackLogo.png";
import { paperSurface } from "../sections/shared";
import { InkRule } from "./ink";

/* Its own surface: the raised-sheet treatment, distinct from the page behind. */
const NavWrap = styled.header`
    ${paperSurface}
`;

/* padding-top re-centers the row against the full visible band: the ink rule
   adds height below, and all-caps glyphs sit high in their em box. */
const NavInner = styled.nav`
    max-width: 1180px;
    margin: 0 auto;
    height: 58px;
    padding: 4px clamp(22px, 5vw, 48px) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

const Brand = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
        height: 30px;
        width: auto;
        display: block;
        mix-blend-mode: multiply;
    }

    @media (max-width: 640px) {
        img { height: 24px; }
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(16px, 3vw, 34px);
`;

const NavLink = styled.a`
    position: relative;
    font-family: "Newsreader", serif;
    font-weight: 700;
    font-size: 0.92rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--ink);
    line-height: 1;
    /* Newsreader caps sit ~2px higher in their em box than the Fraunces
       digits beside them — realign the visible glyphs, not the boxes. */
    transform: translateY(2px);

    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -7px;
        height: 3px;
        border-radius: 40% 60% 50% 50%;
        background: var(--red);
        transform: scaleX(0) rotate(-1deg);
        transform-origin: left center;
        transition: transform 0.22s ease;
    }
    &:hover::after {
        transform: scaleX(1) rotate(-1deg);
    }

    @media (max-width: 560px) {
        &[data-optional] { display: none; }
    }
`;

const Phone = styled.a`
    position: relative;
    font-family: "Fraunces", serif;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    line-height: 1;
    text-decoration: none;
    color: var(--red);
    white-space: nowrap;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 3px;
        border-radius: 40% 60% 50% 50%;
        background: var(--ink);
        transform: scaleX(0) rotate(-1deg);
        transform-origin: left center;
        transition: transform 0.22s ease;
    }
    &:hover::after {
        transform: scaleX(1) rotate(-1deg);
    }

    @media (max-width: 760px) {
        display: none;
    }
`;

export const Nav = () => (
    <NavWrap>
        <NavInner aria-label="Main">
            <Brand href="#top" aria-label="Infinity Lumber — top of page">
                <img src={blackLogo} alt="Infinity" draggable="false"/>
            </Brand>
            <Links>
                <NavLink data-optional="" href="#wood">The Wood</NavLink>
                <NavLink data-optional="" href="#delivery">Delivery</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <Phone href="tel:17184862800">(718) 486-2800</Phone>
            </Links>
        </NavInner>
        <InkRule height={6}/>
    </NavWrap>
);
