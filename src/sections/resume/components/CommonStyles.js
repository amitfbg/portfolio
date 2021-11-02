import styled, { keyframes } from "styled-components";
export const Container = styled.div`
  margin: 0 0.5rem 1.5rem 0.5rem;
  &:last-child {
    margin-bottom: 0rem;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: darkblue;
  display: flex;
  align-items: center;
`;
export const Duration = styled.div`
  width: max-content;
  background-color: red;
  padding: 0.25rem 0.75rem;
  color: white;
  border-radius: 9rem;
`;
export const SubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;
export const Summary = styled.div`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
export const SummaryContainer = styled.div``;

export const ContainerBody = styled.div`
  padding-left: 1.5rem;
`;
export const BulletPoint = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  background-color: black;
  border-radius: 2rem;
  opacity: 0.8;
  margin-right: 0.25rem;
`;

const Fill = (props) => keyframes`
from {
    width:0%;
  }
  to {
      width:${props.maxWidth}%;
  }
`;

export const Meter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 1rem;
  overflow: hidden;
  background-color: #ccc;
  border-radius: 1rem;
`;

export const Progress = styled.div`
  height: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: green;
  animation: ${Fill} 3s ease-in-out forwards;
  border-radius: 1rem;
`;

export const BigBulletPoint = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: red;
  border-radius: 2rem;
  margin-right: 0.5rem;
`;
