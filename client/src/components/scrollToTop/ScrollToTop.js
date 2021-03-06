import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScrollUp from "../../assets/Icons/scroll-up.png";

const Button = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
  color: green;
  & > img {
    width: 4rem;
    height: 4rem;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.location.href = "#home";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <Button>
      <img
        src={ScrollUp}
        alt=""
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollToTop;
