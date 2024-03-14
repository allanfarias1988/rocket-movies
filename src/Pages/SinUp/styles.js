import styled from "styled-components";
import image from "../../assets/background.jpg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row-reverse;

  a:visited {
    color: inherit;
  }

  .formWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 0.8;

    div > h1 {
      font-size: 48px;
      font-weight: bold;
      color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
    }

    div > p {
      font-size: 14px;
      color: hsl(${({ theme }) => theme.COLORS.TEXT_GRAY});
    }

    div > h3 {
      font-size: 24px;
      color: hsl(${({ theme }) => theme.COLORS.TEXT_WHITE});
      margin: 48px 0;
    }

    a {
      text-decoration: none;
      color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
      &:visited {
        text-decoration: none;
        color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
      }
      svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }
`;

export const Form = styled.form`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > a button {
    width: 100%;
    height: 56px;
    margin: 24px 0 42px;
  }
`;

export const BackgroundImg = styled.div`
  background: url(${image}) no-repeat center center;
  background-size: cover;
  flex: 1;
`;
