import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Typical from "react-typical";
import BackgroundImage from "../../assets/Images/Amit_Kumar.jpg";
import HomeBg from "../../assets/Images/Home_bg.svg";
import { socialLogos } from "../resume/utils";

const Container = styled.div`
  min-height: 100vh;
  background-image: url(${HomeBg});
  background-size: cover;
  padding: 0 2rem;
`;
const ContainerHeadSection = styled.div`
  height: 15vh;
  text-align: center;
  margin-bottom: 1rem;
`;
const ContainerBodySection = styled.div`
  min-height: calc(100vh - 15vh);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767.98px) {
    flex-direction: column-reverse;
  }
`;

const ProfileDetailsSection = styled.div`
  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const ProfilePictureSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 5px #ccc;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
  margin-left: 2rem;
  @media (max-width: 767.98px) {
    height: 18rem;
    width: 18rem;
    margin: 0 1rem 1rem;
  }
`;
const SocialLinks = styled.div`
  padding: 0.25rem 0.25rem 0.25rem 0;
  display: flex;
`;
const StyledIcon = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    svg {
      width: 2.5rem;
      height: 2.5rem;
      path {
        fill: #1a1a1d;
      }
    }
  }
`;

const ProfileName = styled.div`
  font-size: 1.5rem;
`;
const ProfileRoles = styled.div`
  font-size: 2.5rem;
  font-family: cursive;
  font-weight: 600;
  margin: 1rem 0 1.5rem 0;
  .styles_typicalWrapper__1_Uvh {
    @media (max-width: 767.98px) {
      font-size: 2.25rem;
    }
  }
`;

const ProfileRoleTagline = styled.div`
  font-size: 1.5rem;
  margin-top: 0.25rem;
`;
const ProfileOptions = styled.div`
  margin: 1rem 0;
  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  @media (max-width: 767.98px) {
    margin: 0 0 0.5rem 0;
  }
`;
const ResumeButton = styled.button`
  padding: 1rem;
  background-color: #ef4830;
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
    <Container id="home">
      <ContainerHeadSection>
        <Header />
      </ContainerHeadSection>
      <ContainerBodySection>
        <ProfileDetailsSection>
          <SocialLinks>
            {socialLogos?.map((currObj) => (
              <StyledIcon onClick={() => window.open(currObj?.href, "_blank")}>
                {currObj?.icon}
              </StyledIcon>
            ))}
          </SocialLinks>
          <ProfileName>
            Hello, I'M
            <span
              style={{ color: "red", fontSize: "2rem", fontWeight: "bold" }}
            >
              {" "}
              Amit
            </span>
          </ProfileName>
          <ProfileRoles>
            <Typical
              loop={Infinity}
              steps={[
                "Developer",
                1000,
                "Enthusiastic Dev",
                1000,
                "Full Stack Dev",
                1000,
                "MERN Developer",
                1000,
                "CP Enthusiastic",
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
      </ContainerBodySection>
    </Container>
  );
};

export default Home;
