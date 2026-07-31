import styled from "styled-components";

/*
 * Hand-inked SVG artwork. Everything draws with currentColor so it can sit
 * in ink or red depending on context. Wobbly curves + doubled strokes are
 * what sell the "drawn with a pen" look — keep them.
 */

const Svg = (props) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" focusable="false" {...props}/>;

const stroke = {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

/* ---------------------------------- rules --------------------------------- */

export const InkRule = ({ height = 8, ...props }) => (
    <Svg viewBox="0 0 1200 12" preserveAspectRatio="none" style={{ display: "block", width: "100%", height }} {...props}>
        <path {...stroke} strokeWidth="3" vectorEffect="non-scaling-stroke"
            d="M2,6 C120,2 260,10 420,6 C580,2 700,10 860,6 C990,3 1100,8 1198,5"/>
        <path {...stroke} strokeWidth="2" vectorEffect="non-scaling-stroke" opacity="0.45"
            d="M6,9 C160,5 320,11 500,8 C680,5 860,11 1194,7"/>
    </Svg>
);

/* Torn paper edge — paper-coloured wave used to lead into the ink footer. */
export const TornEdge = ({ flip = false, ...props }) => (
    <Svg viewBox="0 0 1200 26" preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 22, transform: flip ? "scaleY(-1)" : "none" }} {...props}>
        <path fill="currentColor" d="M0,26 L0,15 C60,9 140,19 230,13 C330,6 420,17 520,11 C620,5 700,16 800,11 C900,6 980,17 1080,12 C1130,9 1170,12 1200,9 L1200,26 Z"/>
    </Svg>
);

/* --------------------------------- arrows --------------------------------- */

export const InkArrowDown = (props) => (
    <Svg viewBox="0 0 44 74" width="26" {...props}>
        <path {...stroke} strokeWidth="3.5" d="M23,4 C20,18 24,34 21,52 C20.5,56 21,60 21.5,63"/>
        <path {...stroke} strokeWidth="3.5" d="M8,48 C13,54 17,60 21.5,66 C26,59 31,52 36,47"/>
    </Svg>
);

/* Curly annotation arrow, tail bottom-left, head top-right. */
export const InkArrowCurl = (props) => (
    <Svg viewBox="0 0 120 64" width="86" {...props}>
        <path {...stroke} strokeWidth="3" d="M6,56 C34,60 74,52 92,36 C102,27 106,20 108,10"/>
        <path {...stroke} strokeWidth="3" d="M97,20 C101,16 104,13 108,9 C108,14 109,19 111,24"/>
    </Svg>
);

/* ------------------------------- annotations ------------------------------ */

const CircledWrap = styled.span`
    position: relative;
    display: inline-block;
    padding: 0.02em 0.16em;
    white-space: nowrap;

    > svg {
        position: absolute;
        top: -14%;
        left: -9%;
        width: 118%;
        height: 130%;
        overflow: visible;
        color: var(--red);
        pointer-events: none;
    }
`;

/* A scribbled ellipse around its children, like circling a number on a docket. */
export const Circled = ({ children, ...props }) => (
    <CircledWrap {...props}>
        {children}
        <Svg viewBox="0 0 200 100" preserveAspectRatio="none">
            <path {...stroke} strokeWidth="2.75" vectorEffect="non-scaling-stroke"
                d="M92,10 C140,4 184,20 188,44 C192,72 148,92 98,91 C50,90 12,76 9,50 C6,24 44,9 96,9 C130,9 158,14 172,22"/>
        </Svg>
    </CircledWrap>
);

const UnderlinedWrap = styled.span`
    position: relative;
    display: inline-block;
    white-space: nowrap;

    > svg {
        position: absolute;
        left: -2%;
        bottom: -0.28em;
        width: 104%;
        height: 0.3em;
        overflow: visible;
        color: var(--red);
        pointer-events: none;
    }
`;

export const Underlined = ({ children, ...props }) => (
    <UnderlinedWrap {...props}>
        {children}
        <Svg viewBox="0 0 300 20" preserveAspectRatio="none">
            <path {...stroke} strokeWidth="2.75" vectorEffect="non-scaling-stroke" d="M5,10 C80,4 200,15 296,7"/>
            <path {...stroke} strokeWidth="2" vectorEffect="non-scaling-stroke" opacity="0.6" d="M24,15 C120,10 210,17 282,12"/>
        </Svg>
    </UnderlinedWrap>
);

/* Checkmark used as a list bullet. */
export const InkTick = (props) => (
    <Svg viewBox="0 0 26 24" width="17" {...props}>
        <path {...stroke} strokeWidth="3.25" d="M3,14 C6,16 8,18 10,20 C14,12 19,6 24,3"/>
    </Svg>
);

/* Rubber-stamp label. Pure CSS, but lives here with the rest of the ink kit. */
export const Stamp = styled.span`
    display: inline-block;
    font-family: "Fraunces", serif;
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    line-height: 1.5;
    text-align: center;
    color: var(--red);
    border: 2.5px solid currentColor;
    border-radius: 6px 14px 8px 16px / 14px 7px 16px 8px;
    padding: 9px 16px 8px;
    position: relative;
    transform: rotate(${props => props.$tilt ?? -6}deg);
    opacity: 0.9;
    user-select: none;

    &::after {
        content: "";
        position: absolute;
        inset: 3px;
        border: 1px solid currentColor;
        border-radius: inherit;
        opacity: 0.55;
    }
`;

/* --------------------------------- scenes -------------------------------- */

/* Flatbed truck stacked with lumber, headed right. */
export const InkTruck = (props) => (
    <Svg viewBox="0 0 360 170" width="320" {...props}>
        {/* motion ticks */}
        <path {...stroke} strokeWidth="3" opacity="0.7" d="M4,74 L22,73 M0,92 L16,91 M6,108 L19,108"/>
        {/* chassis + deck */}
        <path {...stroke} strokeWidth="4" d="M32,118 L252,117"/>
        <path {...stroke} strokeWidth="3.5" d="M30,111 C100,108 180,110 252,109"/>
        {/* lumber stack: three courses of planks */}
        <path {...stroke} strokeWidth="3" d="M38,109 L38,101 C110,99 180,100 246,99 L246,107"/>
        <path {...stroke} strokeWidth="3" d="M46,101 L46,91 C115,89 178,90 240,89 L240,99"/>
        <path {...stroke} strokeWidth="3" d="M56,91 L56,81 C120,79 172,80 230,79 L230,89"/>
        {/* plank joints + grain ticks */}
        <path {...stroke} strokeWidth="2.5" opacity="0.8" d="M132,100 L132,108 M172,90 L172,99 M110,80 L110,90 M196,80 L196,88"/>
        {/* tie-down strap */}
        <path {...stroke} strokeWidth="2.75" d="M142,76 C143,90 143,102 142,116"/>
        {/* cab */}
        <path {...stroke} strokeWidth="4"
            d="M252,117 L252,60 C252,55 255,52 260,52 L294,52 C299,52 303,55 306,60 L318,84 C325,88 330,95 330,104 L330,117 L252,117"/>
        <path {...stroke} strokeWidth="3" d="M260,59 L292,59 L300,77 L260,77 L260,59"/>
        <path {...stroke} strokeWidth="3" d="M285,117 L285,82 M276,90 L283,90"/>
        {/* exhaust stack */}
        <path {...stroke} strokeWidth="3" d="M245,52 L245,30 M251,52 L251,32 M241,28 L255,29"/>
        {/* headlight + bumper */}
        <circle {...stroke} strokeWidth="2.5" cx="331" cy="98" r="3"/>
        <path {...stroke} strokeWidth="4" d="M330,112 L344,111"/>
        {/* wheels: rear duals + front */}
        <circle {...stroke} strokeWidth="4" cx="72" cy="131" r="16"/>
        <circle {...stroke} strokeWidth="2" cx="73" cy="130" r="14.5" opacity="0.45"/>
        <circle {...stroke} strokeWidth="2.5" cx="72" cy="131" r="6"/>
        <circle {...stroke} strokeWidth="4" cx="116" cy="131" r="16"/>
        <circle {...stroke} strokeWidth="2" cx="117" cy="130" r="14.5" opacity="0.45"/>
        <circle {...stroke} strokeWidth="2.5" cx="116" cy="131" r="6"/>
        <circle {...stroke} strokeWidth="4" cx="298" cy="131" r="16"/>
        <circle {...stroke} strokeWidth="2" cx="299" cy="130" r="14.5" opacity="0.45"/>
        <circle {...stroke} strokeWidth="2.5" cx="298" cy="131" r="6"/>
        {/* road */}
        <path {...stroke} strokeWidth="3" opacity="0.85" d="M8,152 L44,151 M64,153 L104,151 M126,152 L168,151 M190,153 L236,151 M258,152 L300,151 M320,153 L352,151"/>
    </Svg>
);

/* A stand of pines, one bird. */
export const InkPines = (props) => (
    <Svg viewBox="0 0 240 180" width="210" {...props}>
        {/* tall centre tree */}
        <path {...stroke} strokeWidth="3.5" d="M112,66 C120,48 128,30 138,12 C146,30 154,48 164,66"/>
        <path {...stroke} strokeWidth="3.5" d="M104,104 C115,86 126,70 138,54 C149,70 160,87 172,104"/>
        <path {...stroke} strokeWidth="3.5" d="M96,144 C110,120 124,102 138,88 C152,103 166,122 180,144"/>
        <path {...stroke} strokeWidth="3" d="M134,144 L135,168 M143,144 L142,168"/>
        {/* left tree */}
        <path {...stroke} strokeWidth="3.25" d="M30,80 C38,66 45,52 52,38 C59,52 66,66 74,80"/>
        <path {...stroke} strokeWidth="3.25" d="M22,116 C32,100 42,86 52,72 C62,86 72,101 82,116"/>
        <path {...stroke} strokeWidth="3.25" d="M14,150 C27,128 39,112 52,98 C65,112 78,130 90,150"/>
        <path {...stroke} strokeWidth="3" d="M48,150 L49,168 M57,150 L56,168"/>
        {/* small right tree */}
        <path {...stroke} strokeWidth="3" d="M186,108 C193,96 199,84 206,72 C213,84 219,96 226,108"/>
        <path {...stroke} strokeWidth="3" d="M180,140 C189,126 197,114 206,102 C215,114 223,127 232,140"/>
        <path {...stroke} strokeWidth="2.75" d="M203,140 L203,160 M210,140 L210,160"/>
        {/* ground + bird */}
        <path {...stroke} strokeWidth="3" opacity="0.85" d="M8,172 L60,170 M84,173 L150,171 M172,172 L232,170"/>
        <path {...stroke} strokeWidth="2.5" d="M198,26 C202,21 207,21 210,25 M210,25 C213,21 218,21 222,26"/>
    </Svg>
);

/* Panel hand-saw, blade pointing right. */
export const InkSaw = (props) => (
    <Svg viewBox="0 0 320 140" width="280" {...props}>
        {/* blade spine + tip */}
        <path {...stroke} strokeWidth="4" d="M70,40 C150,35 220,36 297,42"/>
        {/* toothed underside, tip back to heel */}
        <path {...stroke} strokeWidth="3"
            d="M297,42 L288,57 L281,51 L272,60 L265,54 L256,63 L249,57 L240,66 L233,60 L224,69 L217,63 L208,72 L201,66 L192,75 L185,69 L176,78 L169,72 L160,81 L153,75 L144,84 L137,78 L128,87 L121,81 L112,90 L105,84 L96,92 L88,87 L80,84 L74,64 L70,40"/>
        {/* etch line on blade */}
        <path {...stroke} strokeWidth="2" opacity="0.5" d="M120,55 C170,51 220,51 262,50"/>
        {/* handle */}
        <path {...stroke} strokeWidth="4"
            d="M72,32 C48,20 20,28 14,52 C8,78 26,98 52,94 C64,92 72,84 76,74"/>
        <path {...stroke} strokeWidth="3"
            d="M58,48 C46,42 34,48 32,60 C30,72 40,80 52,78 C58,77 62,72 64,66"/>
        {/* screws */}
        <circle {...stroke} strokeWidth="2.5" cx="46" cy="38" r="3.5"/>
        <circle {...stroke} strokeWidth="2.5" cx="30" cy="76" r="3.5"/>
    </Svg>
);

/* Loose infinity loop — the shop's mark. */
export const InkInfinity = (props) => (
    <Svg viewBox="0 0 170 74" width="96" {...props}>
        <path {...stroke} strokeWidth="4.5"
            d="M32,37 C30,20 50,12 66,25 C82,38 96,54 114,52 C136,50 142,26 124,20 C106,15 92,30 76,43 C60,56 36,58 32,39"/>
        <path {...stroke} strokeWidth="2.5" opacity="0.5"
            d="M38,32 C40,24 50,20 60,26"/>
    </Svg>
);
