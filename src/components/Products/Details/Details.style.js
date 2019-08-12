import styled from "styled-components";

import posed from "react-pose";

const EnterAnimation = posed.div({
    exit: {
        height: "0px",
        top: "100vh",
        delay: 100,
        transition: {
            duration: 300
        }
    },
    enter: {
        height: "calc(100vh - 75px)",
        top: "75px"
    }
})

export const DetailsContainer = styled(EnterAnimation)`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    color: #707070;
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    min-height: 475px;
    min-width: 100%;
`;

export const Description = styled.div`
    font-size: 14px;
    font-weight: 500;
    padding: 0 40px;
    height: 100%;
`;

export const Attributes = styled.div`
    padding: 10px 40px;
`;

export const Item = styled.p`
    font-size: 12px;
`;

const ButtonFade = posed.button({
    enter: {
        opacity: 1,
        delay: 200
    },
    exit: {
        opacity: 0,
        tranduration: {
            duration: 100
        }
    }
})

export const Button = styled(ButtonFade)`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #0A0711;
    background: #A1DFE4;
    color: #0A0711;
    font-size: 15px;
    font-weight: 600;
    position: absolute;
    right: 40px;
    bottom: 45px;
    cursor: pointer;
`;