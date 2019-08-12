import styled from "styled-components";

export const ThumbnailContainer = styled.div`
    background: white;
    width: 100;
    box-shadow: 2px 3px 8px rgba(34, 32, 40, 0.3);
    border-radius: 0 0 1.25em 1.25em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.875em 0;
    margin-bottom: 1.563em;
`;

export const Image = styled.img`
    width: 21.25em;
    height: 19.375em;
`;

export const ProductName = styled.div`
    font-size: 1.5em;
    padding-top: 1.875em;
    color: black;
`;

export const Price = styled.div`
    font-size: 1.375em;
    font-weight: 500;
    color: #791010;
`;
