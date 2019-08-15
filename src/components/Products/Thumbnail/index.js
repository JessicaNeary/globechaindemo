import React from "react";

import { ThumbnailContainer, Image, ProductName, Price } from "./Thumbnail.style";

const Thumbnail = ({ product, onClick }) => (
    <ThumbnailContainer onClick={onClick(product)}>
        <Image src={`data:image/jpeg;base64,${product.image}`} />
        <ProductName>{product.name}</ProductName>
        <Price>${product.price}</Price>
    </ThumbnailContainer>
);

export default Thumbnail