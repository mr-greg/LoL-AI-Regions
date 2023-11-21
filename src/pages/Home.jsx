import React, { useEffect, useRef, useState } from "react";
import arrow from "../assets/images/arrow.svg";
import backArrow from "../assets/images/backToStart.svg";
import Region from "../components/Region/Region";
import {
  DATA_SHADOWISLES,
  DATA_BANDLECITY,
  DATA_BILGEWATER,
  DATA_DEMACIA,
  DATA_IONIA,
  DATA_IXTAL,
  DATA_FRELJORD,
  DATA_NOXUS,
  DATA_PILTOVER,
  DATA_SHURIMA,
  DATA_TARGON,
  DATA_ZAUN,
  DATA_VOID,
} from "../data/data";
import {
  DATA_FR_SHADOWISLES,
  DATA_FR_BANDLECITY,
  DATA_FR_BILGEWATER,
  DATA_FR_DEMACIA,
  DATA_FR_IONIA,
  DATA_FR_IXTAL,
  DATA_FR_FRELJORD,
  DATA_FR_NOXUS,
  DATA_FR_PILTOVER,
  DATA_FR_SHURIMA,
  DATA_FR_TARGON,
  DATA_FR_ZAUN,
  DATA_FR_VOID,
} from "../data/data_fr";
import {
  ArrowImage,
  ArrowsContainer,
  HorizontalScrollContainer,
  ScrollSection,
  StyledLogo,
  StyledWrapper,
} from "./Home.style";
import LangButtons from "../components/LangButtons/LangButtons";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoPlayBackCircle } from "react-icons/io5";
import { IconContext } from "react-icons";
import logo from "../assets/images/logo.png";

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };
  useEffect(() => {
    console.log("selected language: ", selectedLanguage);
  }, [selectedLanguage]);

  const scrollContainerRef = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  // const [french, setFrench] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const currentSection = Math.round(
        scrollContainer.scrollLeft / window.innerWidth
      );
      const totalSections = scrollContainer.children.length;
      const isLastSection = currentSection === totalSections - 1;
      const isScrollable = scrollContainer.scrollWidth > window.innerWidth;

      setShowLeftArrow(currentSection > 0);
      setShowRightArrow(!isLastSection && isScrollable);
    };

    const handleWheel = (event) => {
      event.preventDefault();

      const scrollAmount = 300;
      const currentSection = Math.round(
        scrollContainerRef.current.scrollLeft / window.innerWidth
      );

      if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }
    };

    scrollContainerRef.current.addEventListener("scroll", handleScroll);
    scrollContainerRef.current.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      scrollContainerRef.current.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scrollLeft = () => {
    const currentSection = Math.round(
      scrollContainerRef.current.scrollLeft / window.innerWidth
    );
    scrollToSection(currentSection - 1);
  };

  const scrollRight = () => {
    const currentSection = Math.round(
      scrollContainerRef.current.scrollLeft / window.innerWidth
    );
    scrollToSection(currentSection + 1);
  };

  const backToStart = () => {
    scrollToSection(0);
  };

  const scrollToSection = (section) => {
    const nextSectionOffset = section * window.innerWidth;
    scrollContainerRef.current.scrollTo({
      left: nextSectionOffset,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <StyledLogo>
        <img src={logo} alt="Mr. Greg Logo" />
      </StyledLogo>
      <StyledWrapper>
        <LangButtons
          selectedLanugage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </StyledWrapper>
      <HorizontalScrollContainer ref={scrollContainerRef}>
        <ScrollSection>
          <Region
            data={
              selectedLanguage === "EN" ? DATA_SHADOWISLES : DATA_FR_SHADOWISLES
            }
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={
              selectedLanguage === "EN" ? DATA_BANDLECITY : DATA_FR_BANDLECITY
            }
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={
              selectedLanguage === "EN" ? DATA_BILGEWATER : DATA_FR_BILGEWATER
            }
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={selectedLanguage === "EN" ? DATA_DEMACIA : DATA_FR_DEMACIA}
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={selectedLanguage === "EN" ? DATA_NOXUS : DATA_FR_NOXUS}
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={selectedLanguage === "EN" ? DATA_IONIA : DATA_FR_IONIA}
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={selectedLanguage === "EN" ? DATA_IXTAL : DATA_FR_IXTAL}
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={selectedLanguage === "EN" ? DATA_FRELJORD : DATA_FR_FRELJORD}
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={selectedLanguage === "EN" ? DATA_PILTOVER : DATA_FR_PILTOVER}
          />
        </ScrollSection>
        <ScrollSection>
          <Region data={selectedLanguage === "EN" ? DATA_ZAUN : DATA_FR_ZAUN} />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={selectedLanguage === "EN" ? DATA_SHURIMA : DATA_FR_SHURIMA}
          />
        </ScrollSection>
        <ScrollSection>
          <Region
            data={selectedLanguage === "EN" ? DATA_TARGON : DATA_FR_TARGON}
          />
        </ScrollSection>
        <ScrollSection>
          <Region data={selectedLanguage === "EN" ? DATA_VOID : DATA_FR_VOID} />
        </ScrollSection>
      </HorizontalScrollContainer>

      <ArrowsContainer>
        {showLeftArrow && (
          <FaArrowAltCircleLeft
            size="1.2em"
            color="rgba(255, 255, 255, 0.4)"
            onClick={scrollLeft}
            style={{ cursor: "pointer" }}
          />
        )}
        {showRightArrow && (
          <FaArrowAltCircleRight
            size="1.2em"
            color="rgba(255, 255, 255, 0.4)"
            onClick={scrollRight}
            style={{ cursor: "pointer" }}
          />
        )}
        {!showRightArrow && (
          <IoPlayBackCircle
            size="1.2em"
            color="rgba(255, 255, 255, 0.4)"
            onClick={backToStart}
            style={{ cursor: "pointer" }}
          />
        )}
      </ArrowsContainer>
    </div>
  );
};

export default Home;
