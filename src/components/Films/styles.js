import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 248px;
  background-color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_CARD_FILMS});

  padding: 32px;
  overflow: auto;
  margin-bottom: 24px;

  .star {
    color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
    cursor: pointer;
  }

  div:nth-child(1) {
    margin-bottom: 16px;
  }

  border-radius: 10px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  P {
    color: hsl(${({ theme }) => theme.COLORS.TEXT_GRAY});
    margin: 16px 0 28px;
  }
`;
