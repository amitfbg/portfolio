import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/Images/Amit_Kumar.jpg";
import PageHeader from "../../components/pageHeader/PageHeader";
import AboutBg from "../../assets/Images/About_bg.svg";
import { keyDetails } from "../resume/utils";

const Container = styled.div`
  min-height: 100vh;
  background-image: url(${AboutBg});
  background-size: cover;
  padding: 2rem 2rem 0 2rem;
`;

const ContainerBodySection = styled.div`
  color: #fff !important;
  font-family: "Poppins";
`;
const Hi = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin: 1rem 0 1.5rem;
`;

const Bio = styled.div`
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0 1rem;
`;

const FunFacts = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
  }
`;

const KeyPoints = styled.div`
  width: 50%;
  padding: 1.25rem;
  color: #fff;
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;
const Photo = styled.div`
  width: 50%;
  padding: 1.25rem;
  vertical-align: middle;
  & img {
    height: 20rem;
    width: 20rem;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: rgba(2, 1, 1, 0);
    border-radius: 0 35px 0 35px;
  }
  @media (max-width: 767.98px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const KeyPointsHead = styled.div`
  font-size: 2rem;
  color: #ef4830;
  font-weight: bold;
  margin: 0 0 1rem;
`;
const KeyPointsBody = styled.div`
  font-size: 1.5rem;
`;

const Tab = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
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

function About() {
  return (
    <Container id="about">
      <PageHeader title="My, Myself & I" subtitle="A brief into about me" />
      <ContainerBodySection>
        <Hi>Hi!</Hi>
        <Bio>
          My name is Amit Kumar. As a graduated full stack developer with
          background knowledge of MERN stacks with redux, along with a knack of
          building applications with utmost efficiency. After my education I
          fully focused on learning new skills, so I got to know all the ins and
          outs. Well-organized person, problem solver with high attention of
          details. Fan of Marvel, outdoor activities and TV series. Working on
          ambitious project with positive people.
        </Bio>
        <FunFacts>
          <KeyPoints>
            <KeyPointsHead>A few more fun facts about me:</KeyPointsHead>
            <KeyPointsBody>
              {keyDetails?.map((currOption) => (
                <Tab>
                  <TabIcon>
                    <img src={currOption.icon} alt="" />
                  </TabIcon>
                  <TabTitle>{currOption.label}</TabTitle>
                </Tab>
              ))}
            </KeyPointsBody>
          </KeyPoints>
          <Photo>
            <img src={BackgroundImage} alt="" />
          </Photo>
        </FunFacts>
      </ContainerBodySection>
    </Container>
  );
}

export default About;
