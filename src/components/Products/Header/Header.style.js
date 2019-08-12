import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "../../../svgs/down-arrow.svg";
import { ReactComponent as CrossSvg } from "../../../svgs/close.svg";

export const HeaderContainer = styled.div`
    width: 100%;
    background: #000000;
    color: #c2c2c2;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-size: 24px;
`;

export const Arrow = styled(ArrowSvg)`
    width: 25px;
    fill: #c2c2c2;
`;

export const Cross = styled(CrossSvg)`
    fill: #c2c2c2;
    width: 25px;
`;