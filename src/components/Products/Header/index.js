import React from "react";


import {
    HeaderContainer,
    Title,
    Arrow,
    Cross,
    IconTransition,
    Transition
} from "./Header.style";

const Header = ({ currentProduct, close }) => (
    <HeaderContainer>
        <Title>
            <Transition pose={currentProduct ? "in" : "down"}>
                {currentProduct}
            </Transition>
            <Transition pose={!currentProduct ? "in" : "up"}>
                Guitars
            </Transition>
        </Title>
        <IconTransition pose={currentProduct ? "up" : "down"}>
        { currentProduct ?
            <Cross onClick={close} /> :
            <Arrow />
        }
        </IconTransition>
    </HeaderContainer>
)

export default Header;