import React from "react";

import { ThumbnailContainer, Image, ProductName, Price } from "./Thumbnail.style";

const Thumbnail = ({ product, onClick }) => (
    <ThumbnailContainer onClick={onClick}>
        <Image src={product.url} />
        <ProductName>{product.name}</ProductName>
        <Price>${product.price}</Price>
    </ThumbnailContainer>
);

export default Thumbnail