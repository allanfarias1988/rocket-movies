import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  background-color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_INPUT});
  color: hsl(${({ theme }) => theme.COLORS.TEXT_GRAY});
  border-radius: 10px;

  input {
    width: 100%;
    height: 56px;
    border: none;
    outline: none;
    padding: 12px;

    background: transparent;
  }
  svg {
    margin-left: 12px;
  }
`;
