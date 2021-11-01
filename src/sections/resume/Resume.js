import React, { useEffect, useState } from "react";

import styled from "styled-components";
import EducationCard from "./components/EducationCard";
import { resumeData, resumeOptions } from "./utils";

const Container = styled.div`
  height: 100vh;
  background-color: aliceblue;
  padding-top: 2rem;
`;

const ContainerHeadSection = styled.div`
  /* padding: 2rem auto; */
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerHeadTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;
const ContainerHeadSubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContainerMainSection = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
`;
const RightSection = styled.div`
  min-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CenterSection = styled.div`
  margin: auto 2rem;
  height: 90%;
  width: 0.5rem;
  background-color: brown;
`;
const LeftSection = styled.div`
  min-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Tab = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  opacity: 0.5;
  ${({ isSelected }) =>
    isSelected && `color: #000;border-bottom: 0.35rem solid #e20074;opacity:1;`}
  margin-right: 2rem;
  cursor: pointer;
`;
const TabTitle = styled.div``;

export default function Resume() {
  const [selectedKey, setSelectedKey] = useState(resumeOptions?.[0]);
  const [selectedData, setSelectedData] = useState();

  const tabDataSelection = {
    Education: selectedData?.map((currData) => (
      <EducationCard
        title={currData?.nameOfInstitution}
        duration={currData?.duration}
        subtitle={currData?.course}
      />
    )),
    "Work History": selectedData?.map((currData) => (
      <EducationCard
        title={currData?.nameOfInstitution}
        duration={currData?.duration}
        subtitle={currData?.course}
      />
    )),
    "Programming Skills": selectedData?.map((currData) => (
      <EducationCard
        title={currData?.nameOfInstitution}
        duration={currData?.duration}
        subtitle={currData?.course}
      />
    )),
    Projects: selectedData?.map((currData) => (
      <EducationCard
        title={currData?.nameOfInstitution}
        duration={currData?.duration}
        subtitle={currData?.course}
      />
    )),
    Interests: selectedData?.map((currData) => (
      <EducationCard
        title={currData?.nameOfInstitution}
        duration={currData?.duration}
        subtitle={currData?.course}
      />
    )),
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
              isSelected={currOption === selectedKey}
              onClick={() => handleVerticalTabClick(currOption)}
            >
              <TabTitle>{currOption}</TabTitle>
            </Tab>
          ))}
        </LeftSection>
        <CenterSection />
        <RightSection>{tabDataSelection?.[selectedKey]}</RightSection>
      </ContainerMainSection>
    </Container>
  );
}
