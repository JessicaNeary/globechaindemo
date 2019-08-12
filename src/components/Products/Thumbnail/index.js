import React from "react";

import { ThumbnailContainer, Image, ProductName, Price } from "./Thumbnail.style";

const Thumbnail = ({ product, onClick }) => (
    <ThumbnailContainer onClick={onClick(product)}>
        <Image src={product.image} />
        <ProductName>{product.name}</ProductName>
        <Price>${product.price}</Price>
    </ThumbnailContainer>
);

{/*<Image src={`data:image/jpeg;base64,${product.image}`} />*/}

export default Thumbnail