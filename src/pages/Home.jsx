import React from "react";
import Demacia from "../components/Demacia/Demacia";
import Piltover from "../components/Piltover/Piltover";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import Noxus from "../components/Noxus/Noxus";

const Home = () => {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return(
    // faire un bouton "show champions" par page pour affichager les champions de la region ??
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <Demacia />
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Piltover />
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Noxus />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
};

export default Home;