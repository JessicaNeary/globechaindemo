import styled from "styled-components";

export const DetailsContainer = styled.div`
    width: 100%;
    height: calc(100vh - 75px);
    position: absolute;
    top: 75px;
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
    padding: 0 40px 10px;
    height: 100%;
`;

export const Attributes = styled.div`
    padding: 10px 40px;
`;

export const Item = styled.p`
    font-size: 12px;
`;

export const Button = styled.button`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #0A0711;
    background: #A1DFE4;
    color: #0A0711;
    font-size: 15px;
    font-weight: 600;
    position: absolute;
    right: 45px;
    bottom: 45px;
    cursor: pointer;
`;