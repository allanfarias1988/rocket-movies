import styled from "styled-components";

export const Container = styled.button`
  font-weight: 500;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px;

  color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_TAG});
  background-color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: ease-in-out 200ms;
  &:hover {
    filter: brightness(0.8);
  }
`;
