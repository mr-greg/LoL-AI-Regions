import styled from "styled-components";

export const StyledLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 140px;
  z-index: 1;
  img {
    width: 10%;
    opacity: 0.5;
  }
`;
export const StyledWrapper = styled.div`
  position: absolute;
  top: 48px;
  left: 40px;
  z-index: 1;
`;

export const HorizontalScrollContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  height: 100vh;
  position: relative;
`;

export const ScrollSection = styled.div`
  flex: 0 0 100vw;
  scroll-snap-align: start;
  overflow: hidden;
  position: relative;
`;

export const ArrowsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  gap: 5px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;

export const ArrowImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px 10px;
  opacity: 0.8;
  background-color: white;
  border-radius: 100%;
  padding: 8px;
  cursor: pointer;
`;

export const BackToStartButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
`;
