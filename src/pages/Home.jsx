import React, { useRef, useEffect, useState } from "react";
import Demacia from "../components/Demacia/Demacia";
import Piltover from "../components/Piltover/Piltover";
import Noxus from "../components/Noxus/Noxus";
import arrow from "../assets/images/arrow.svg";
import backArrow from "../assets/images/backToStart.svg";
import { HorizontalScrollContainer, ScrollSection, ArrowsContainer, ArrowImage, BackToStartButton } from "./Home.style";
import ShadowIsles from "../components/ShadowIsles/ShadowIsles";


const Home = () => {
  const scrollContainerRef = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const currentSection = Math.round(scrollContainer.scrollLeft / window.innerWidth);
      const totalSections = scrollContainer.children.length;
      const isLastSection = currentSection === totalSections - 1;
      const isScrollable = scrollContainer.scrollWidth > window.innerWidth;

      setShowLeftArrow(currentSection > 0);
      setShowRightArrow(!isLastSection && isScrollable);
    };

    const handleWheel = (event) => {
      event.preventDefault();

      const scrollAmount = 300;
      const currentSection = Math.round(scrollContainerRef.current.scrollLeft / window.innerWidth);

      if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }
    };

    scrollContainerRef.current.addEventListener('scroll', handleScroll);
    scrollContainerRef.current.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      scrollContainerRef.current.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const scrollLeft = () => {
    const currentSection = Math.round(scrollContainerRef.current.scrollLeft / window.innerWidth);
    scrollToSection(currentSection - 1);
  };

  const scrollRight = () => {
    const currentSection = Math.round(scrollContainerRef.current.scrollLeft / window.innerWidth);
    scrollToSection(currentSection + 1);
  };

  const backToStart = () => {
    scrollToSection(0);
  };

  const scrollToSection = (section) => {
    const nextSectionOffset = section * window.innerWidth;
    scrollContainerRef.current.scrollTo({ left: nextSectionOffset, behavior: "smooth" });
  };

  return (
    <div>
      <HorizontalScrollContainer ref={scrollContainerRef}>
        <ScrollSection>
          <ShadowIsles />
        </ScrollSection>

        <ScrollSection>
          <Demacia />
        </ScrollSection>
        <ScrollSection>
          <Piltover />
        </ScrollSection>
        <ScrollSection>
          <Noxus />
        </ScrollSection>
      </HorizontalScrollContainer>

      <ArrowsContainer>
        {showLeftArrow && <ArrowImage src={arrow} alt="Left Arrow" onClick={scrollLeft} style={{transform: "rotate(180deg)"}}/>}
        {showRightArrow && <ArrowImage src={arrow} alt="Right Arrow" onClick={scrollRight} />}
        {!showRightArrow && <ArrowImage src={backArrow} alt="Back to start arrow" onClick={backToStart} />}
      </ArrowsContainer>
    </div>
  );
};

export default Home;