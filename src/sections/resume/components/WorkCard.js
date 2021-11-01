import React from "react";
import {
  Container,
  ContainerBody,
  ContainerHeader,
  Duration,
  SubTitle,
  Summary,
  SummaryContainer,
  Title,
} from "./CommonStyles";

function WorkCard(props) {
  const { title, duration, subtitle, summary } = props;
  return (
    <Container>
      <ContainerHeader>
        <Title>{title}</Title>
        <Duration>{duration}</Duration>
      </ContainerHeader>
      <ContainerBody>
        <SubTitle>{subtitle}</SubTitle>
        <SummaryContainer>
          {summary?.map((currSummary) => (
            <Summary>{currSummary}</Summary>
          ))}
        </SummaryContainer>
      </ContainerBody>
    </Container>
  );
}

export default WorkCard;
