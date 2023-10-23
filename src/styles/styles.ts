import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0c0c0c;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  border-radius: 0 0 8px 8px;
  background-color: #0c0c0c;
  max-width: 80%;
  min-width: 40%;

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .row:first-child {
    button {
      background-color: #1c1c1c;
    }
  }

  .row button:last-child {
    background-color: #ff9f0a;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .row:first-child,
  .row:last-child {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;
