import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 116px;
  margin-top: 30px;
  margin-bottom: 48px;
  border-bottom: solid 1px hsl(${({ theme }) => theme.COLORS.BACKGROUND_GRAY_700});

  display: flex;
  justify-content: space-between;
  align-items: center;


  h1 {
    margin: 0 64px 0 124px;
    color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
  }
`;
