import styled from "styled-components";
import image from "../../assets/allan-perfil.jpg";

export const Header = styled.div`
  height: 144px;
  background-color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_CARD_FILMS});
  display: flex;
  align-items: center;
  justify-content: center;

  a:visited {
    color: inherit;
  }

  > div {
    width: 800px;
    display: flex;
    align-items: center;
    color: hsl(${({ theme }) => theme.COLORS.PRIMARY});

    a span {
      margin-left: 8px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  background-color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_BODY});

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfileImg = styled.div`
  min-width: 186px;
  min-height: 186px;
  margin: -80px 0 64px;

  border-radius: 50%;
  background: url(${image}) no-repeat center center;
  background-size: cover;

  position: relative;
`;

export const ProfileIcon = styled.button`
  width: 48px;
  height: 48px;
  padding: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  background-color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
  border-radius: 50%;

  position: absolute;
  bottom: 0px;
  right: 12px;

  svg {
    width: 20px;
    height: 20px;
    color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_TAG});
  }

  div:has(input[type="file"]) {
    width: 0;
    height: 0;
  }

  label {
    display: flex;
    align-items: center;

    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 340px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  div:has(input[type="email"]) {
    margin-bottom: 16px;
  }

  button {
    width: 100%;
    margin-top: 16px;
  }

  label {
    width: 100%;
  }
`;
