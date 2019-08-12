import React from "react";

import {
    DetailsContainer,
    Description,
    Image,
    Attributes,
    Item,
    Button
} from "./Details.style";
import { PoseGroup } from "react-pose";

const Details = ({ description, name, image, attributes }) => (
    <PoseGroup>
        {name &&
        <DetailsContainer key="details" pose={name ? "enter" : "exit"}>
            <Image src={image}/>
            <Description>{description}</Description>
            <Attributes>
                {attributes.map((item, index) => (
                    <Item key={index}>{item}</Item>
                ))}
            </Attributes>
            <Button>BUY NOW</Button>
        </DetailsContainer>
        }
    </PoseGroup>
);

export default Details