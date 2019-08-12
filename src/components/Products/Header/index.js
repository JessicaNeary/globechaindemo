import React from "react";

import { HeaderContainer, Title, Arrow, Cross } from "./Header.style";

const Header = ({ currentProduct, close }) => (
    <HeaderContainer>
        <Title>{ currentProduct || "Guitars" }</Title>
        { currentProduct ?
            <Cross onClick={close} /> :
            <Arrow />
        }
    </HeaderContainer>
)

export default Header;