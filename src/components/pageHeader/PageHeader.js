import React from "react";
import styled from "styled-components";

const ContainerHeadSection = styled.div`
  height: 15vh;
  text-align: center;
  margin-bottom: 1rem;
`;

const ContainerHeadTitle = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: #08fdd8;
`;
const ContainerHeadSubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  color: #ffffff;
`;

const HorizontalRule = styled.div`
  position: relative;
  width: 40%;
  height: 0.3rem;
  border-radius: 1rem;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  margin: 1rem auto;
`;

const DividerLineBlock = styled.div`
  position: absolute;
  height: 0.5rem;
  width: 10%;
  border-radius: 1rem;
  background-color: #ef4830;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function PageHeader(props) {
  const { title, subtitle } = props;
  return (
    <ContainerHeadSection>
      <ContainerHeadTitle>{title}</ContainerHeadTitle>
      <ContainerHeadSubTitle>{subtitle}</ContainerHeadSubTitle>
      <HorizontalRule>
        <DividerLineBlock />
      </HorizontalRule>
    </ContainerHeadSection>
  );
}

export default PageHeader;
