import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px 110px 0 120px;
  color: hsl(${({ theme }) => theme.COLORS.TEXT_WHITE});
  overflow-y: hidden;
  a:visited {
    color: inherit;
  }

  main {
    height: 600px;
    overflow-y: auto;

    > a {
      color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
      margin-left: 8px;
    }

    div {
      display: flex;
      align-items: center;
    }

    .header {
      margin: 24px 0;
      display: flex;
      align-items: center;
    }

    .perfil,
    .clock,
    .tags {
      display: flex;
      gap: 8px;
    }

    .perfil img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: inline;
    }

    .tags {
      margin: 40px 0;
      display: flex;
      align-items: center;
    }

    h2 {
      margin-right: 20px;
      font-size: 36px;
    }

    svg {
      color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
      height: 16px;
      width: 16px;
    }

    p {
      text-align: justify;
    }
  }

  main::-webkit-scrollbar {
    width: 8px;
    height: 96px;
  }

  main::-webkit-scrollbar-thumb {
    background-color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
    border-radius: 8px;
  }

  main::-moz-scrollbar {
    width: 12px;
    height: 96px;
  }

  main::-moz-scrollbar-thumb {
    background-color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
    border-radius: 8px;
  }
  main {
    scroll-behavior: smooth;
  }
`;
