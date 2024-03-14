import styled from "styled-components";

export const Container = styled.div`
  width: 198px;
  height: 68px;
  margin-right: 124px;

  display: flex;
  align-items: center;
  text-align: end;

  strong {
    font-size: 14px;
    color: hsl(${({ theme }) => theme.COLORS.TEXT_WHITE});
  }

  p {
    width: calc(198px - 64px);
    font-size: 14px;
    color: hsl(${({ theme }) => theme.COLORS.TEXT_GRAY});
    cursor: pointer;
  }

  img {
    width: 64px;
    height: 64px;
    margin-left: 8px;

    border-radius: 50%;
  }
  
`;
