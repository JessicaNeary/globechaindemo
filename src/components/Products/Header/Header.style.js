import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "../../../svgs/down-arrow.svg";
import { ReactComponent as CrossSvg } from "../../../svgs/close.svg";
import posed from "react-pose";

export const HeaderContainer = styled.div`
    width: 100%;
    background: #000000;
    color: #c2c2c2;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    height: 75px;
    top: 0;
    overflow: hidden;
`;


export const Transition = posed.div({
    up: {
        transition: { ease: "easeInOut" },
        y: "-80px",
        opacity: 0
    },
    in: {
        transition: { ease: "easeInOut" },
        y: "0px",
        opacity: 1
    },
    down: {
        transition: { ease: "easeInOut" },
        y: "80px",
        opacity: 0
    }
});

export const Title = styled.div`
    text-transform: uppercase;
    font-size: 24px;
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
    width: 25px;
    fill: #c2c2c2;
    padding: 10px 0;
`;

export const Cross = styled(CrossSvg)`
    fill: #c2c2c2;
    width: 25px;
    cursor: pointer;
    padding: 5px 0;
`;
