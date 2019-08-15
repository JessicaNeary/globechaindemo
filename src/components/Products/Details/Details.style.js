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
        height: "calc(100vh - 4.688em)",
        top: "4.688em"
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
    height: calc(100% - 16em);
    padding: 0 20px;
    object-fit: cover;
`;

export const Description = styled.div`
    font-size: 0.875em;
    font-weight: 500;
    padding: 0 2.5em;
`;

export const Attributes = styled.div`
    padding: 0.625em 2.5em;
`;

export const Item = styled.p`
    font-size: 0.75em;
`;

const ButtonFade = posed.button({
    enter: {
        opacity: 1,
        delay: 200
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 100
        }
    }
})

export const Button = styled(ButtonFade)`
    width: 7.813em;
    height: 2.5em;
    border-radius: 1.25em;
    border: 2px solid #0A0711;
    background: #6CF4FF;
    color: #0A0711;
    font-size: 0.938em;
    font-weight: 600;
    position: absolute;
    right: 2.5em;
    bottom: 2.813em;
    cursor: pointer;
`;