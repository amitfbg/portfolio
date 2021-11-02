import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Typical from "react-typical";
import BackgroundImage from "../../assets/Images/Amit_Kumar.jpg";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: aliceblue;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;
const ProfileDetailsSection = styled.div``;
const ProfilePictureSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 5px #ccc;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
  margin-left: 2rem;
`;
const SocialLinks = styled.div``;
const ProfileName = styled.div`
  font-size: 1.5rem;
`;
const ProfileRoles = styled.div`
  font-size: 2.5rem;
  font-family: cursive;
  font-weight: 600;
  margin: 1rem 0 1.5rem 0;
`;

const ProfileRoleTagline = styled.div`
  font-size: 1.5rem;
  margin-top: 0.25rem;
`;
const ProfileOptions = styled.div`
  margin: 0.5rem 0;
`;
const HireMeButton = styled.button`
  padding: 1rem;
  background-color: #1f2235;
  border-radius: 3rem;
  width: 10rem;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  border: none;
  margin-right: 1rem;
`;
const ResumeButton = styled.button`
  padding: 1rem;
  background-color: #ff5823;
  border-radius: 3rem;
  border: none;
  width: 10rem;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
`;

const ProfilePic = styled.div`
  height: 98%;
  width: 98%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  border-radius: 50%;
`;

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <ProfileDetailsSection>
          <SocialLinks>F I </SocialLinks>
          <ProfileName>
            Hello, I'M<span> Amit</span>
          </ProfileName>
          <ProfileRoles>
            <Typical
              loop={Infinity}
              steps={[
                "Enthusiastic Dev ",
                1000,
                "Full Stack Developer ",
                1000,
                "MERN Developer ",
                1000,
                "CP enthusiastic ",
                1000,
              ]}
            />
          </ProfileRoles>
          <ProfileRoleTagline>
            Knack of building application with front and back end operations.
          </ProfileRoleTagline>
          <ProfileOptions>
            <HireMeButton>Hire Me</HireMeButton>
            <ResumeButton>Get Resume</ResumeButton>
          </ProfileOptions>
        </ProfileDetailsSection>
        <ProfilePictureSection>
          <ProfilePic />
        </ProfilePictureSection>
      </Container>
    </>
  );
};

export default Home;
