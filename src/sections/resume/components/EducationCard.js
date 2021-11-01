import React from "react";
import {
  Container,
  ContainerBody,
  ContainerHeader,
  Duration,
  SubTitle,
  Title,
} from "./CommonStyles";

function EducationCard(props) {
  const { title, duration, subtitle } = props;
  return (
    <Container>
      <ContainerHeader>
        <Title>{title}</Title>
        <Duration>{duration}</Duration>
      </ContainerHeader>
      <ContainerBody>
        <SubTitle>{subtitle}</SubTitle>
      </ContainerBody>
    </Container>
  );
}

export default EducationCard;
