import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem;
  border: 1px solid #3c3c3c;
  background-color: #0f0f0f;

  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  color: #fff;

  flex: 1;

  transition: all 200ms;

  &:hover {
    filter: brightness(1.75);
  }
`;
