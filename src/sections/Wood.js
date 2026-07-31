import styled from "styled-components";
import plank from "../assets/plank.png";
import { Section, Kicker, H2, Lede, HandNote, Art, paperSurface } from "./shared";
import { InkTick, Underlined } from "../components/ink";

/* Paper card pinned down with a hard ink shadow, slightly askew. */
const Card = styled.article`
    position: relative;
    ${paperSurface}
    border: 2.5px solid var(--ink);
    border-radius: 14px 255px 16px 255px / 255px 16px 255px 14px;
    box-shadow: 7px 8px 0 -2px rgba(25, 21, 17, 0.85);
    padding: clamp(26px, 3.5vw, 44px) clamp(24px, 3.5vw, 46px) clamp(26px, 3.5vw, 40px);
    transform: rotate(-0.4deg);
    margin-top: clamp(36px, 5vw, 60px);
`;

const CardTitle = styled.h3`
    margin: 0 0 34px;
    font-weight: 800;
    font-size: clamp(1.5rem, 2.6vw, 2.1rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
`;

/* Title and list stack in the left column; the plank occupies the right
   column across both rows, so its top lines up with the title. */
const CardGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: auto 1fr;
    column-gap: clamp(24px, 4vw, 60px);

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        grid-template-rows: none;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    columns: 2;
    column-gap: clamp(28px, 4vw, 56px);

    @media (max-width: 520px) {
        columns: 1;
    }
`;

const Item = styled.li`
    break-inside: avoid;
    display: flex;
    align-items: baseline;
    gap: 10px;
    padding: 5px 0;
    font-family: "Newsreader", serif;
    font-weight: 500;
    font-size: clamp(1.05rem, 1.4vw, 1.2rem);

    svg {
        flex: none;
        transform: translateY(2px);
        color: var(--red);
    }
`;

const CardArt = styled(Art)`
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: start;
    width: clamp(260px, 32vw, 430px);
    transform: rotate(3deg);

    @media (max-width: 760px) {
        grid-column: 1;
        grid-row: auto;
        justify-self: center;
        width: 72%;
        max-width: 360px;
    }
`;

const Footnote = styled.p`
    margin: 24px 0 0;
    padding-top: 16px;
    border-top: 1.5px dashed rgba(25, 21, 17, 0.3);
    font-size: 0.98rem;
    font-style: italic;
    color: var(--ink-soft);

    span {
        color: var(--red);
        font-style: normal;
        font-weight: 700;
        margin-right: 3px;
    }
`;

const Aside = styled.p`
    margin: clamp(28px, 4vw, 44px) 0 0;
    text-align: center;
    transform: rotate(-1deg);
`;

const NoteTail = styled.span`
    @media (max-width: 700px) {
        display: block;
    }
`;

const constructionItems = [
    "Rough cut timbers", "Sheathing", "Lagging", "Shoring lumber", "Dimensional lumber",
    "Plywood", "OSHA plank", "Crane mats", "Trailer decking", "Barricades",
    "Timbercurb", "Sewer fencing", "Nails & screws", "Other building supplies",
];

export const Wood = () => (
    <Section id="wood">
        <Kicker>02 · The wood</Kicker>
        <H2>What's in the yard.</H2>
        <Lede>
            If a job in this city runs on wood, chances are it's in
            our yard.
        </Lede>
        <Card>
            <CardGrid>
                <CardTitle>Heavy construction lumber</CardTitle>
                <List>
                    {constructionItems.map((item) => (
                        <Item key={item}><InkTick/>{item}</Item>
                    ))}
                </List>
                <CardArt src={plank} alt="Ink drawing of a rough-cut plank"/>
            </CardGrid>
            <Footnote>
                <span>*</span>We also sell hardwood products — slabs, charcuterie
                boards, and tables. Ask when you call.
            </Footnote>
        </Card>
        <Aside>
            <HandNote>
                don't see it on the list? <Underlined>call anyway</Underlined>
                <NoteTail> — if it's wood, we can get it.</NoteTail>
            </HandNote>
        </Aside>
    </Section>
);
