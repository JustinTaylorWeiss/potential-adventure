import styled from "styled-components";
import truck from "../assets/truck.png";
import { Section, Kicker, H2, Lede, Art } from "./shared";

const Grid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: clamp(30px, 5vw, 70px);
    align-items: start;
    margin-top: clamp(30px, 4vw, 50px);

    @media (max-width: 860px) {
        grid-template-columns: 1fr;
    }
`;

const Places = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Place = styled.li`
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 9px 0;
    border-bottom: 1.5px dashed rgba(25, 21, 17, 0.35);
    font-family: "Fraunces", serif;
    font-weight: 700;
    font-size: clamp(1.35rem, 2.4vw, 1.9rem);
    letter-spacing: -0.01em;

    &:last-child {
        border-bottom: none;
    }
`;

const Num = styled.span`
    font-family: "Newsreader", serif;
    font-style: italic;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    color: var(--red);
    flex: none;
    width: 1.8em;
`;

const ArtCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    height: 100%;
`;

const Truck = styled(Art)`
    width: 100%;
    max-width: 560px;
    align-self: center;
`;

const places = [
    "The Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island", "Long Island", "New Jersey",
];

export const Delivery = () => (
    <Section id="delivery">
        <Kicker>03 · Delivery</Kicker>
        <H2>Same day, across the city.</H2>
        <Lede>
            Our flatbeds cover all five boroughs, Long Island, and New
            Jersey, seven days a week — tell us where and when, and
            we'll make it work.
        </Lede>
        <Grid>
            <Places>
                {places.map((place, i) => (
                    <Place key={place}>
                        <Num>{String(i + 1).padStart(2, "0")}</Num>
                        {place}
                    </Place>
                ))}
            </Places>
            <ArtCol>
                <Truck src={truck} alt="Ink drawing of a flatbed truck loaded with lumber"/>
            </ArtCol>
        </Grid>
    </Section>
);
