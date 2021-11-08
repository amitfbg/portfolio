import React from "react";
import styled from "styled-components";
import ALogo from "../../assets/Icons/ALogo";

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const ContainerLeft = styled.div``;
const ContainerRight = styled.div``;
const MenuContainer = styled.div``;
const Menu = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #000000;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
`;
const StyledIcon = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 3.8rem;
    height: 3.8rem;
  }
`;

const menuOptions = [
  { id: "Home", lable: "Home", href: "#" },
  { id: "About", lable: "About Me", href: "#about" },
  { id: "Resume", lable: "Resume", href: "#resume" },
  { id: "Contact", lable: "Contact Me", href: "#contact" },
];

const renderMenu = () => {
  return (
    <MenuContainer>
      {menuOptions.map(({ id, lable, href }) => {
        return (
          <Menu href={href} key={id}>
            {lable}
          </Menu>
        );
      })}
    </MenuContainer>
  );
};

const Header = () => {
  return (
    <Container>
      <ContainerLeft>
        <StyledIcon>
          <ALogo />
        </StyledIcon>
      </ContainerLeft>
      <ContainerRight>{renderMenu()}</ContainerRight>
    </Container>
  );
};

export default Header;
