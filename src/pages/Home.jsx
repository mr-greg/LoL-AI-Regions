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
  ArrowImage,
  ArrowsContainer,
  HorizontalScrollContainer,
  ScrollSection,
} from "./Home.style";

const Home = () => {
  const scrollContainerRef = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
      <HorizontalScrollContainer ref={scrollContainerRef}>
        <ScrollSection>
          <Region data={DATA_SHADOWISLES} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_BANDLECITY} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_BILGEWATER} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_DEMACIA} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_NOXUS} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_IONIA} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_IXTAL} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_FRELJORD} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_PILTOVER} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_ZAUN} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_SHURIMA} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_TARGON} />
        </ScrollSection>
        <ScrollSection>
          <Region data={DATA_VOID} />
        </ScrollSection>
      </HorizontalScrollContainer>

      <ArrowsContainer>
        {showLeftArrow && (
          <ArrowImage
            src={arrow}
            alt="Left Arrow"
            onClick={scrollLeft}
            style={{ transform: "rotate(180deg)" }}
          />
        )}
        {showRightArrow && (
          <ArrowImage src={arrow} alt="Right Arrow" onClick={scrollRight} />
        )}
        {!showRightArrow && (
          <ArrowImage
            src={backArrow}
            alt="Back to start arrow"
            onClick={backToStart}
          />
        )}
      </ArrowsContainer>
    </div>
  );
};

export default Home;
