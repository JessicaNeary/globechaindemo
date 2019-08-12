import React from "react";

import {
    DetailsContainer,
    Description,
    Image,
    Attributes,
    Item,
    Button
} from "./Details.style";

const Details = ({ description, name, image, attributes }) => (
    <DetailsContainer>
        <Image src={image} />
        <Description>{description}</Description>
        <Attributes>
            { attributes.map((item, index) => (
                <Item key={index}>{item}</Item>
            ))}
        </Attributes>
        <Button>BUY NOW</Button>
    </DetailsContainer>
);

export default Details