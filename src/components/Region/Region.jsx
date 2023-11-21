import React, { useState } from "react";
import { StyledRegion } from "./Region.style";
import { IoIosCheckmark } from "react-icons/io";

const Region = ({ data }) => {
  const [guessInput, setGuessInput] = useState("");
  const [bgInputText, setBgInputText] = useState("transparent");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [doRotate, setDoRotate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Input : ", guessInput);
    console.log("data?.champion : ", data?.champion);
    if (guessInput.toLowerCase() == data?.champion) {
      setBgInputText("rgba(67, 158, 88, 0.8)");
      setIsDisabled(true);
      setIsVisible(true);
    } else {
      // vibrate animation on the input
      setDoRotate(true);
      setBgInputText("rgba(158, 67, 67, 0.5)");
    }
  };
  const handleInputChange = (event) => {
    setGuessInput(event.target.value);
    setDoRotate(false);
    setBgInputText("transparent");
  };

  return (
    <StyledRegion bg={data?.bg}>
      <div className="infos">
        <h1>
          <span>{data?.title}</span>
        </h1>
        <p>
          <span>{data?.desc}</span>
        </p>
      </div>
      <div className="prompt">
        <h5>
          <span>Prompt</span>
        </h5>
        <p>
          <span>{data?.prompt}</span>
        </p>
      </div>
      <form className="guess" onSubmit={handleSubmit}>
        <h5>Guess the quote's champion !</h5>
        <label htmlFor="guess-txt" className="label-wrapper">
          <input
            name="guess-txt"
            type="text"
            onChange={handleInputChange}
            style={{ background: bgInputText }}
            disabled={isDisabled}
            className={doRotate ? "rotate" : ""}
          />
          {isVisible && <IoIosCheckmark className="checkmark" />}
        </label>
        <input
          type="submit"
          value="Submit"
          className={isDisabled ? "disabled" : ""}
        />
      </form>
    </StyledRegion>
  );
};

export default Region;
