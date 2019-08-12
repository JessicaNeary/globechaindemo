import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "../../../svgs/down-arrow.svg";
import { ReactComponent as CrossSvg } from "../../../svgs/close.svg";
import posed from "react-pose";

export const HeaderContainer = styled.div`
    width: 100%;
    background: #000000;
    color: #c2c2c2;
    padding: 1.25em 0.938em;
    display: flex;
    justify-content: space-between;
    position: absolute;
    height: 4.688em;
    top: 0;
    overflow: hidden;
`;


export const Transition = posed.div({
    up: {
        transition: { ease: "easeInOut" },
        y: "-5em",
        opacity: 0
    },
    in: {
        transition: { ease: "easeInOut" },
        y: "0px",
        opacity: 1
    },
    down: {
        transition: { ease: "easeInOut" },
        y: "5em",
        opacity: 0
    }
});

export const Title = styled.div`
    text-transform: uppercase;
    font-size: 1.5em;
`;


export const IconTransition = posed.div({
    up: {
        rotate: 0,
    },
    down: {
        rotate: 360,
    }
});

export const Arrow = styled(ArrowSvg)`
    width: 1.563em;
    fill: #c2c2c2;
    padding: 0.625em 0;
`;

export const Cross = styled(CrossSvg)`
    fill: #c2c2c2;
    width: 1.563em;
    cursor: pointer;
    padding: 0.313em 0;
`;
