import React, { useState } from "react";
import { StyledRegion } from "./Region.style";

const Region = ({ data }) => {
  const [guessInput, setGuessInput] = useState("");
  const [bgInputText, setBgInputText] = useState("transparent");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Input : ", guessInput);
    console.log("data?.champion : ", data?.champion);
    if (guessInput.toLowerCase() == data?.champion) {
      setBgInputText("rgba(67, 158, 88, 0.8)");
      setIsDisabled(true);
      // mettre un petit icône de checkmark dans l'input (fond droite)
    }
  };
  const handleInputChange = (event) => {
    setGuessInput(event.target.value);
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
        <input
          type="text"
          onChange={handleInputChange}
          style={{ background: bgInputText }}
          disabled={isDisabled}
        />
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
