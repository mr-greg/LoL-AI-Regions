import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
`;

export const StyledRegion = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-size: cover;

  padding: 40px 80px;

  display: flex;
  flex-direction: column;
  align-items: end;

  .rotate {
    animation: ${rotate} 0.5s linear;
  }

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
    gap: 5px;
    p {
      white-space: break-spaces;
    }
  }

  .guess {
    display: flex;
    align-items: start;
    flex-direction: column;
    position: absolute;
    bottom: 12%;
    gap: 5px;

    input[type="text"] {
      border: 1px solid rgb(255, 255, 255, 0.4);
      box-shadow: 0 0 5px rgb(255, 255, 255, 0.4);
      color: rgb(255, 255, 255, 0.8);
    }

    input[type="submit"] {
      background-color: transparent;
      color: rgb(255, 255, 255, 0.6);
      border: 1px solid rgb(255, 255, 255, 0.4);
      box-shadow: 0 0 5px rgb(255, 255, 255, 0.4);
      cursor: pointer;
    }
    .disabled {
      cursor: not-allowed !important;
    }
    .label-wrapper {
      position: relative;
      .checkmark {
        position: absolute;
        bottom: 25%;
        right: 1%;
        width: 24px;
      }
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
    .guess {
      bottom: 25%;
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
    .guess {
      bottom: 25%;
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
    .guess {
      bottom: 25%;
    }
  }
`;
