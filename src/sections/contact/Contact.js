import React from "react";
import styled from "styled-components";
import Form from "../../components/form/Form";
import PageHeader from "../../components/pageHeader/PageHeader";
import { socialLogos } from "../resume/utils";

const Container = styled.div`
  min-height: 100vh;
  background-color: aliceblue;
  padding: 2rem 2rem 0 2rem;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  color: ${({ color }) => color};
`;
const SubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
`;

const ContainerBodySection = styled.div`
  display: flex;
`;

const BodyRightSection = styled.div`
  width: 50%;
  padding: 1rem;
`;
const BodyLeftSection = styled.div`
  width: 50%;
  padding: 1rem;
`;
const SocialHandleSection = styled.div`
  padding: 0.25rem;
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
        fill: #08fdd8;
      }
    }
  }
`;

function Contact() {
  return (
    <Container>
      <PageHeader title="Contact Me" subtitle="Let's get in touch" />
      <ContainerBodySection>
        <BodyRightSection>
          <Title>
            Do you have a <span style={{ color: "red" }}>question?</span>
          </Title>
          <SubTitle>
            You can ask your question using the form. You will also find our
            contact details and socials below.
          </SubTitle>
          <Title color="brown;">Get in touch 🤝 </Title>
          <SocialHandleSection>
            {socialLogos?.map((currObj) => (
              <StyledIcon>{currObj?.icon}</StyledIcon>
            ))}
          </SocialHandleSection>
        </BodyRightSection>
        <BodyLeftSection>
          <Form />
        </BodyLeftSection>
      </ContainerBodySection>
    </Container>
  );
}

export default Contact;
