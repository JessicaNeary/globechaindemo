import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "../../../svgs/down-arrow.svg";
import { ReactComponent as CrossSvg } from "../../../svgs/close.svg";
import posed from "react-pose";

export const HeaderContainer = styled.div`
    background: #000000;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const Main = styled.div`
    color: #c2c2c2;
    padding: 1.25em 0.938em;
    display: flex;
    justify-content: space-between;
    height: 4.688em;
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

const MenuTransition = posed.div({
    enter: {
        height: "auto"
    },
    exit: {
        height: 0
    }
})

export const MenuContainer = styled(MenuTransition)`
    display: flex;
    flex-direction: column;
    margin-left: 2.813em;
    margin-right: 1.72em;
    overflow: hidden;
`;

export const Subtitle = styled.div`
    border-top: 1px solid #474747;
    text-transform: uppercase;
    font-size: 1.25em;
    color: #989898;
    padding: 0.844em 0;
`;


export const IconTransition = posed.div({
    up: {
        rotate: -180,
    },
    down: {
        rotate: 0,
    }
});

export const Arrow = styled(ArrowSvg)`
    width: 1.563em;
    fill: #c2c2c2;
    padding: 0.313em 0;
`;

export const Cross = styled(CrossSvg)`
    fill: #c2c2c2;
    width: 1.563em;
    cursor: pointer;
    padding: 0.313em 0;
`;
