import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageHeader from "../../components/pageHeader/PageHeader";
import CommonCard from "./components/CommonCard";
import ProgrammingCard from "./components/ProgrammingCard";
import { resumeData, resumeOptions } from "./utils";
import ResumeBg from "../../assets/Images/Resume_bg.svg";

const Container = styled.div`
  min-height: 100vh;
  background-image: url(${ResumeBg});
  background-size: cover;
  padding: 2rem 2rem 0 2rem;
`;
const ContainerMainSection = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
  }
`;
const RightSection = styled.div`
  width: 60%;
  max-height: 95%;
  overflow-y: auto;
  margin: 1rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 767.98px) {
    width: 100%;
    height: 90%;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
`;
const CenterSection = styled.div`
  margin: auto 2rem;
  height: 90%;
  width: 3px;
  border-radius: 1rem;
  background-color: #e0e0e0;
  box-shadow: 2px 2px 5px 0px rgb(0 0 0 / 30%);
  @media (max-width: 767.98px) {
    display: none;
  }
`;
const LeftSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767.98px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const Tab = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  opacity: 0.5;
  ${({ isSelected }) =>
    isSelected &&
    `color: #ffffff;border-radius:0rem 5rem 5rem 0rem;opacity:1;background-color: #1a1a1d;`}
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
      return data?.map((currData) => (
        <CommonCard
          title={currData?.nameOfInstitution}
          duration={currData?.duration}
          subtitle={currData?.course}
        />
      ));
    } else if (key === "Work History") {
      return data?.map((currData) => (
        <CommonCard
          title={currData?.nameOfCompany}
          duration={currData?.duration}
          subtitle={currData?.position}
          summary={currData?.summary}
        />
      ));
    } else if (key === "Programming Skills") {
      return data?.map((currData) => (
        <ProgrammingCard
          width={currData?.value}
          subtitle={currData?.nameOfSkill}
        />
      ));
    } else if (key === "Projects") {
      return data?.map((currData) => (
        <CommonCard
          title={currData?.nameOfProject}
          duration={currData?.duration}
          subtitle={currData?.technologyUsed}
          summary={currData?.summary}
        />
      ));
    } else {
      return data?.map((currData) => (
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
    <Container id="resume">
      <PageHeader title="Resume" subtitle="My Formal Bio Details" />
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
