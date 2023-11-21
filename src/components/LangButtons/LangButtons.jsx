import { useState } from "react";
import { StyledLangButtons } from "./LangButtons.style";

const LangButtons = ({ selectedLanugage, onLanguageChange }) => {
  return (
    <StyledLangButtons>
      <button
        type="button"
        onClick={() => onLanguageChange("FR")}
        style={{
          backgroundColor:
            selectedLanugage === "FR" ? "rgba(255, 255, 255, 0.3)" : "inherit",
        }}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => onLanguageChange("EN")}
        style={{
          backgroundColor:
            selectedLanugage === "EN" ? "rgba(255, 255, 255, 0.3)" : "inherit",
        }}
      >
        EN
      </button>
    </StyledLangButtons>
  );
};

export default LangButtons;
