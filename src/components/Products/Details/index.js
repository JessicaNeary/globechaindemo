import React from "react";

import {
    DetailsContainer,
    Description,
    Image,
    Attributes,
    Item
} from "./Details.style";

const Details = ({ description, attributes }) => (
    <DetailsContainer>
        Details
        <Description>{description}</Description>
    </DetailsContainer>
);

export default Details