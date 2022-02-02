import React from "react";
import {
  Container,
  ContainerBody,
  Meter,
  Progress,
  SubTitle,
} from "./CommonStyles";

function ProgrammingCard(props) {
  const { subtitle, width } = props;
  return (
    <Container>
      <ContainerBody>
        <SubTitle>{subtitle}</SubTitle>
        <Meter>
          <Progress maxWidth={width} />
        </Meter>
      </ContainerBody>
    </Container>
  );
}

export default ProgrammingCard;
