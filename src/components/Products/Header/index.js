import React from "react";

import {
    HeaderContainer,
    Main,
    Title,
    MenuContainer,
    Subtitle,
    Arrow,
    Cross,
    IconTransition,
    Transition
} from "./Header.style";

class Header extends React.Component {
    state = {
        open: false
    };
    toggleMenu = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        const {currentProduct, close} = this.props;
        const open = this.state.open;
        return (
            <HeaderContainer>
                <Main>
                    <Title>
                        <Transition pose={currentProduct ? "in" : "down"}>
                            {currentProduct}
                        </Transition>
                        <Transition pose={!currentProduct ? "in" : "up"}>
                            Guitars
                        </Transition>
                    </Title>
                    <IconTransition pose={currentProduct || open ? "up" : "down"}>
                        {currentProduct ?
                            <Cross onClick={close}/> :
                            <Arrow onClick={this.toggleMenu}/>
                        }
                    </IconTransition>
                </Main>
                <Menu pose={open ? "enter" : "exit"}/>
            </HeaderContainer>
        );
    };
};

const Menu = ({ pose }) => (
  <MenuContainer pose={pose}>
      <Subtitle>All</Subtitle>
      <Subtitle>Acoustic</Subtitle>
      <Subtitle>Electric</Subtitle>
  </MenuContainer>
);

export default Header;