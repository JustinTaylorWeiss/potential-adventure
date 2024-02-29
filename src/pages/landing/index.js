import { LandingFirstTile } from "./1First";
import { LandingAboutTile } from "./2About";
import { LandingWood } from "./3Wood";
import { FooterWrapper } from "./4Footer";

export const Landing = () => <>
    <LandingFirstTile/>
    <LandingAboutTile/>
    <LandingWood/>
</>;

export const Footer = () => <FooterWrapper/>