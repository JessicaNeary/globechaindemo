import styled from "styled-components";

export const ThumbnailContainer = styled.div`
    background: white;
    box-shadow: 2px 3px 8px rgba(34, 32, 40, 0.3);
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
`;

export const Image = styled.img`
    width: 340px;
    height: 310px;
`;

export const ProductName = styled.div`
    font-size: 24px;
    color: black;
`;

export const Price = styled.div`
    font-size: 22px;
    font-weight: 500;
    color: #791010;
`;
