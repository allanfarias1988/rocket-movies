import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  span + span {
    margin-left: 8px;
  }

  a:visited {
    color: inherit;
  }

  section {
    margin: 0 106px 0 123px;
    margin-bottom: 40px;

    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
  }
`;
