import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 1rem 2rem 2rem;
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
  /* &:nth-last-child() {
    padding-left: 0;
  }
  &:nth-child(1) {
    padding-left: 0;
  } */
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
      <ContainerLeft>Logo</ContainerLeft>
      <ContainerRight>{renderMenu()}</ContainerRight>
    </Container>
  );
};

export default Header;
