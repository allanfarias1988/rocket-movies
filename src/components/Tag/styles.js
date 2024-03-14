import styled from "styled-components";

export const Container = styled.span`
  /* height: 24px; */
  border-radius: 10px;
  /*   margin-right: 8px;
  margin-bottom: 32px; */

  padding: 6px 16px;

  background-color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_TAG});
  color: hsl(${({ theme }) => theme.COLORS.TEXT_WHITE});
`;
