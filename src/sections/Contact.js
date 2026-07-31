import styled from "styled-components";
import { Section, Kicker, H2, Lede, HandNote, paperSurface } from "./shared";
import { Circled, Stamp } from "../components/ink";

const Grid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: clamp(34px, 5vw, 80px);
    align-items: start;
    margin-top: clamp(34px, 4vw, 54px);

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const Block = styled.div`
    margin-bottom: clamp(24px, 3vw, 34px);

    &:last-child {
        margin-bottom: 0;
    }
`;

const Label = styled.p`
    margin: 0 0 6px;
    font-family: "Newsreader", serif;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--red);
`;

const BigLink = styled.a`
    display: inline-block;
    font-family: "Fraunces", serif;
    font-weight: 700;
    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
    line-height: 1.25;
    letter-spacing: -0.01em;
    text-decoration: none;
    color: var(--ink);
    transition: color 0.15s ease;

    &:hover {
        color: var(--red);
    }

    small {
        font-family: "Newsreader", serif;
        font-style: italic;
        font-weight: 500;
        font-size: 0.95rem;
        letter-spacing: 0.02em;
        color: var(--ink-soft);
        margin-left: 10px;
    }
`;

const Plain = styled.p`
    margin: 0;
    font-family: "Fraunces", serif;
    font-weight: 600;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    color: var(--ink);

    small {
        font-family: "Newsreader", serif;
        font-style: italic;
        font-weight: 500;
        font-size: 0.9rem;
        color: var(--ink-soft);
        margin-left: 10px;
    }
`;

const MapCol = styled.div`
    position: relative;

    @media (max-width: 900px) {
        margin-top: 56px;
    }
`;

/* No CSS filter on the iframe: filtering a cross-origin frame stops Chromium
   from compositing it at all, which blanks the map. */
const MapMat = styled.div`
    ${paperSurface}
    border: 2.5px solid var(--ink);
    border-radius: 12px 255px 14px 255px / 255px 14px 255px 12px;
    box-shadow: 8px 9px 0 -2px rgba(25, 21, 17, 0.85);
    padding: 12px;
    transform: rotate(0.6deg);

    iframe {
        display: block;
        width: 100%;
        aspect-ratio: 5 / 4;
        border: 1.5px solid var(--ink);
    }
`;

/* Sits fully above the map sheet; translate(-100%) clears its own height. */
const MapStamp = styled(Stamp)`
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, -100%) rotate(3deg);
    font-size: 1.05rem;
    padding: 11px 22px 10px;
    z-index: 1;
`;

const MapCaption = styled.div`
    margin: 16px 6px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 14px;
    flex-wrap: wrap;
`;

const Directions = styled.a`
    font-family: "Newsreader", serif;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--red);
    text-decoration: none;

    &:hover {
        color: var(--ink);
    }
`;

const MAPS_URL = "https://www.google.com/maps/place/Infinity+Building+Supplies/@40.7263429,-73.9341559,17z/data=!4m6!3m5!1s0x89c25eb51cebd44f:0x9511fe7d92b5752b!8m2!3d40.7260486!4d-73.9338672!16s%2Fg%2F1thq1mm2?entry=ttu";

export const Contact = () => (
    <Section id="contact">
        <Kicker>04 · Contact</Kicker>
        <H2>Talk to a human.</H2>
        <Lede>
            Call any hour, any day — a real person picks up.
        </Lede>
        <Grid>
            <div>
                <Block>
                    <Label>Call or text</Label>
                    <BigLink href="tel:17184862800">(718) 486-2800<small>yard line</small></BigLink>
                    <br/>
                    <BigLink href="tel:15163820939">(516) 382-0939<small>mobile</small></BigLink>
                </Block>
                <Block>
                    <Label>Email</Label>
                    <BigLink href="mailto:michelle@infinitylumber.com">michelle@infinitylumber.com</BigLink>
                </Block>
                <Block>
                    <Label>Hours</Label>
                    <Plain>Open <Circled>24/7</Circled></Plain>
                    <HandNote style={{ display: "inline-block", marginTop: 10, transform: "rotate(-1.5deg)" }}>
                        yes, really. call at 3am — someone answers.
                    </HandNote>
                </Block>
                <Block>
                    <Label>Fax</Label>
                    <Plain>(718) 486-2801</Plain>
                </Block>
            </div>
            <MapCol>
                <MapStamp>The Yard</MapStamp>
                <MapMat>
                    <iframe
                        title="Map to Infinity Lumber, 551 Stewart Ave, Brooklyn"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAc1xZ868G0r_fb9sq4nSQnQPA1ngA2J54&q=Infinity+Building+Supplies,Brooklyn+NY&zoom=13"
                    />
                </MapMat>
                <MapCaption>
                    <Plain style={{ fontSize: "1.15rem" }}>551 Stewart Ave, Brooklyn, NY 11222</Plain>
                    <Directions href={MAPS_URL} target="_blank" rel="noreferrer">Get directions →</Directions>
                </MapCaption>
            </MapCol>
        </Grid>
    </Section>
);
