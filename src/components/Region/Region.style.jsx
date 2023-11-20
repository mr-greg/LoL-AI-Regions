import styled from "styled-components";

export const StyledRegion = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-size: cover;

  padding: 40px 80px;

  display: flex;
  flex-direction: column;
  align-items: end;

  .infos {
    min-width: 444px;
    width: 26%;
    white-space: normal;
    text-align: left;
    h1 {
      line-height: 100%;
      margin-bottom: 48px;
    }
  }

  .prompt {
    display: flex;
    align-items: start;
    flex-direction: column;
    position: absolute;
    bottom: 48px;
    left: 40px;
    p {
      white-space: break-spaces;
    }
  }

  /* tablettes */
  @media screen and (min-width: 481px) and (max-width: 767px) {
    h1 {
      font-size: 56px;
    }
    .infos {
      min-width: 300px;
    }
    .prompt {
      flex-direction: column;
      align-items: start;
      p {
        white-space: break-spaces;
      }
    }
  }

  /* téléfon */
  @media screen and (min-width: 300px) and (max-width: 480px) {
    /* align-items: center; */
    h1 {
      font-size: 52px;
    }
    .infos {
      min-width: 225px;
      align-items: center;
    }
    .prompt {
      flex-direction: column;
      align-items: start;
      p {
        white-space: break-spaces;
      }
    }
  }

  @media screen and (max-width: 300px) {
    align-items: center;
    h1 {
      font-size: 40px;
    }
    .infos {
      min-width: 200px;
      align-items: center;
    }
    .prompt {
      flex-direction: column;
      align-items: start;
      p {
        white-space: break-spaces;
      }
    }
  }
`;
