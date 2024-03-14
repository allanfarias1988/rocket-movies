import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 110px 0 120px;
  color: hsl(${({ theme }) => theme.COLORS.TEXT_WHITE});
  overflow-y: hidden;

  > div {
    padding-right: 24px;
  }

  main {
    height: 600px;
    overflow-y: auto;
    margin-top: 40px;
    padding: 0 24px 24px 0;

    svg {
      color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
    }
    a {
      color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
      margin-left: 8px;

      &:visited {
        color: inherit;
      }
    }

    div {
      display: flex;
      align-items: center;
    }

    h1 {
      margin: 24px 0 40px;
    }

    .inputWrapper {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-bottom: 40px;
    }
    textarea {
      background-color: hsl(${({ theme }) => theme.COLORS.BACKGROUND_INPUT});
      color: hsl(${({ theme }) => theme.COLORS.TEXT_WHITE});
      border: none;
      outline: none;
      resize: none;
      border-radius: 10px;
      padding: 16px;
      width: 100%;
      height: 300px;
    }

    h3 {
      color: hsl(${({ theme }) => theme.COLORS.TEXT_GRAY});
      margin: 40px 0 24px;
    }

    .tags {
      background-color: hsl(
        ${({ theme }) => theme.COLORS.BACKGROUND_HIGHLIGHT}
      );
      display: flex;
      align-items: center;
      gap: 24px;
      height: 88px;
      padding: 16px;
      border-radius: 8px;

      span {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .newHighLither {
        border-radius: 8px;
        border-style: dashed;
        border-color: hsl(${({ theme }) => theme.COLORS.TEXT_GRAY});
        > span {
          color: hsl(${({ theme }) => theme.COLORS.TEXT_GRAY});
          background: transparent;
          cursor: pointer;
        }
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-top: 40px;
    }

    .buttons button:first-child {
      background-color: hsl(
        ${({ theme }) => theme.COLORS.BACKGROUND_HIGHLIGHT}
      );
      color: hsl(${({ theme }) => theme.COLORS.PRIMARY});
    }

    .buttons button {
      display: flex;
      height: 56px;
      width: 100%;
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
