import React, { useEffect, useState } from "react";

import styled from "styled-components";
import CommonCard from "./components/CommonCard";
import ProgrammingCard from "./components/ProgrammingCard";
import { resumeData, resumeOptions } from "./utils";

const Container = styled.div`
  height: 100vh;
  background-color: aliceblue;
  padding: 2rem 2rem 0 2rem;
`;

const ContainerHeadSection = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerHeadTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;
const ContainerHeadSubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
`;

const ContainerMainSection = styled.div`
  display: flex;
  height: 65vh;
  justify-content: center;
`;
const RightSection = styled.div`
  min-width: 50%;
  max-height: 95%;
  overflow-y: auto;
  margin: 1rem;
  padding-top: 0.5rem;
`;
const CenterSection = styled.div`
  margin: auto 2rem;
  height: 90%;
  width: 3px;
  border-radius: 1rem;
  background-color: #e0e0e0;
  box-shadow: 2px 2px 5px 0px rgb(0 0 0 / 30%);
`;
const LeftSection = styled.div`
  min-width: 30%;
  margin: auto;
`;

const Tab = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  opacity: 0.5;
  ${({ isSelected }) =>
    isSelected &&
    `color: #000;border-radius:0rem 5rem 5rem 0rem;opacity:1;background-color: aqua;`}
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 0rem 0.5rem 0.5rem;
`;
const TabTitle = styled.div``;
const TabIcon = styled.div`
  display: flex;
  align-items: center;
  & img {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export default function Resume() {
  const [selectedKey, setSelectedKey] = useState(resumeOptions?.[0]?.label);
  const [selectedData, setSelectedData] = useState();

  const getCurrentTabContent = (key, data) => {
    if (key === "Education") {
      return data?.map((currData, index) => (
        <CommonCard
          title={currData?.nameOfInstitution}
          duration={currData?.duration}
          subtitle={currData?.course}
        />
      ));
    } else if (key === "Work History") {
      return data?.map((currData, index) => (
        <CommonCard
          title={currData?.nameOfCompany}
          duration={currData?.duration}
          subtitle={currData?.position}
          summary={currData?.summary}
        />
      ));
    } else if (key === "Programming Skills") {
      return data?.map((currData, index) => (
        <ProgrammingCard
          width={currData?.value}
          subtitle={currData?.nameOfSkill}
        />
      ));
    } else if (key === "Projects") {
      return data?.map((currData, index) => (
        <CommonCard
          title={currData?.nameOfProject}
          duration={currData?.duration}
          subtitle={currData?.technologyUsed}
          summary={currData?.summary}
        />
      ));
    } else {
      return data?.map((currData, index) => (
        <CommonCard
          title={currData?.nameOfInterest}
          subtitle={currData?.briefIntro}
        />
      ));
    }
  };

  useEffect(() => {
    setSelectedData(resumeData?.[selectedKey]);
  }, [selectedKey]);

  const handleVerticalTabClick = (param) => {
    setSelectedKey(param);
  };

  return (
    <Container>
      <ContainerHeadSection>
        <ContainerHeadTitle>Resume</ContainerHeadTitle>
        <ContainerHeadSubTitle>My Formal Bio Details</ContainerHeadSubTitle>
      </ContainerHeadSection>
      <ContainerMainSection>
        <LeftSection>
          {resumeOptions?.map((currOption) => (
            <Tab
              isSelected={currOption.label === selectedKey}
              onClick={() => handleVerticalTabClick(currOption.label)}
            >
              <TabIcon>
                <img src={currOption.icon} alt="NA" />
              </TabIcon>
              <TabTitle>{currOption.label}</TabTitle>
            </Tab>
          ))}
        </LeftSection>
        <CenterSection />
        <RightSection>
          {getCurrentTabContent(selectedKey, selectedData)}
        </RightSection>
      </ContainerMainSection>
    </Container>
  );
}
