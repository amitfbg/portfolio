import React from "react";
import {
  BigBulletPoint,
  BulletPoint,
  Container,
  ContainerBody,
  ContainerHeader,
  Duration,
  SubTitle,
  Summary,
  SummaryContainer,
  Title,
} from "./CommonStyles";

function CommonCard(props) {
  const { title, duration, subtitle, summary } = props;
  return (
    <Container>
      <ContainerHeader>
        <Title>
          <div>
            <BigBulletPoint />
          </div>
          <div>{title}</div>
        </Title>
        {duration && <Duration>{duration}</Duration>}
      </ContainerHeader>
      <ContainerBody>
        <SubTitle>{subtitle}</SubTitle>
        {summary && (
          <SummaryContainer>
            {summary?.map((currSummary) => (
              <Summary>
                <div>
                  <BulletPoint />
                </div>
                <div>{currSummary}</div>
              </Summary>
            ))}
          </SummaryContainer>
        )}
      </ContainerBody>
    </Container>
  );
}

export default CommonCard;
