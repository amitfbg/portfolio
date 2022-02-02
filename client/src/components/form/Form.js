import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import Loading from "./../Loading/index";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
  border-radius: 1rem;
  color: #000000;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 2px 4px 14px 0 rgb(31 38 135 / 40%);
  border-radius: 2rem;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  width: 90%;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #d4d0e1;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #d4d0e1;
    font-weight: 100;
    font-size: 1rem;
  }
`;
const StyledTextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 2px 4px 14px 0 rgb(31 38 135 / 40%);
  border-radius: 2rem;
  resize: none;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  width: 90%;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #d4d0e1;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #d4d0e1;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  margin-bottom: 0.5rem;
  width: 90%;
  &:nth-child(1) {
    margin-top: 1rem;
  }
`;
const Label = styled.div`
  padding: 0 1rem 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffffff;
`;
const ErrorMessage = styled.div`
  padding: 0.5rem 1rem;
  color: red;
`;

const LoadingContainer = styled.div`
  display: flex;
  position: relative;
`;

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const dataToPost = {
        name,
        email,
        message,
      };
      setIsLoading(true);
      const response = await axios.post("/contact", dataToPost);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(response.data.msg);
        toast.error(response.data.msg);
        setIsLoading(false);
      } else if (response.status === 200) {
        setBanner(response.data.msg);
        toast.success(response.data.msg);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error, "ERROR IN SUBMITTING");
    }
  };

  return (
    <MainContainer>
      <InputContainer>
        <Wrap>
          <Label>Name</Label>
          <StyledInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <ErrorMessage>E</ErrorMessage>
        </Wrap>
        <Wrap>
          <Label>Email</Label>
          <StyledInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <ErrorMessage>E</ErrorMessage>
        </Wrap>
        <Wrap>
          <Label>Message</Label>
          <StyledTextArea
            placeholder="Message..."
            rows="4"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <ErrorMessage>E</ErrorMessage>
        </Wrap>
      </InputContainer>
      <ButtonContainer onClick={handleSubmit}>
        <StyledButton disabled={isLoading}>Send</StyledButton>
        {isLoading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
      </ButtonContainer>
    </MainContainer>
  );
}

export default Form;
