import styled from "styled-components";
import whiteLogo from "../assets/whiteLogo.png";
import { TornEdge } from "./ink";

const FooterWrap = styled.footer`
    margin-top: clamp(80px, 10vw, 140px);
    color: var(--ink);
`;

const Band = styled.div`
    background: var(--ink);
    color: var(--paper);
    padding: clamp(26px, 3vw, 38px) clamp(22px, 5vw, 48px);
`;

const Inner = styled.div`
    max-width: 1180px;
    margin: 0 auto;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
`;

/* Logo + note act as one back-to-top button. */
const Brand = styled.a`
    display: inline-block;
    text-decoration: none;
    cursor: pointer;

    img {
        height: 28px;
        width: auto;
        display: block;
    }

    p {
        margin: 4px 0 0;
        font-family: "Caveat", cursive;
        font-weight: 600;
        font-size: 1.3rem;
        line-height: 1.1;
        color: var(--red-bright);
        transform: rotate(-2deg);
        transform-origin: left center;
    }
`;

const ContactLine = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: flex-end;
    gap: 12px;
    flex-wrap: wrap;

    /* Mobile: phone number only */
    @media (max-width: 640px) {
        a:not([href^="tel"]),
        span {
            display: none;
        }
    }
`;

const Dot = styled.span`
    opacity: 0.55;
    user-select: none;
`;

const FootLink = styled.a`
    font-family: "Newsreader", serif;
    font-size: 1rem;
    line-height: 1.15;
    text-decoration: none;
    color: var(--paper);
    opacity: 0.92;

    &:hover {
        opacity: 1;
        color: var(--red-bright);
    }
`;

const MAPS_URL = "https://www.google.com/maps/place/Infinity+Building+Supplies/@40.7263429,-73.9341559,17z/data=!4m6!3m5!1s0x89c25eb51cebd44f:0x9511fe7d92b5752b!8m2!3d40.7260486!4d-73.9338672!16s%2Fg%2F1thq1mm2?entry=ttu";

export const Footer = () => (
    <FooterWrap>
        <TornEdge style={{ color: "var(--ink)", marginBottom: -1 }}/>
        <Band>
            <Inner>
                <Row>
                    <Brand href="#top" aria-label="Back to top">
                        <img src={whiteLogo} alt="Infinity Lumber" draggable="false"/>
                        <p>we got wood —</p>
                    </Brand>
                    <ContactLine>
                        <FootLink href="tel:17184862800">(718) 486-2800</FootLink>
                        <Dot>·</Dot>
                        <FootLink href="mailto:michelle@infinitylumber.com">michelle@infinitylumber.com</FootLink>
                        <Dot>·</Dot>
                        <FootLink href={MAPS_URL} target="_blank" rel="noreferrer">551 Stewart Ave, Brooklyn</FootLink>
                    </ContactLine>
                </Row>
            </Inner>
        </Band>
    </FooterWrap>
);
