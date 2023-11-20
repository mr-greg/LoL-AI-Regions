import React from "react";
import { StyledRegion } from "./Region.style";

const Region = ({ data }) => {
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
    </StyledRegion>
  );
};

export default Region;
