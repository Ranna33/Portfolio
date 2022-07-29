import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import Button from "../../styles/GlobalComponents/Button";
import { LeftSection,Button } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I BUILD <br />
          STUFF!
        </SectionTitle>
        <SectionText>I'm a Frontend Developer and Designer.</SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
        <br /> <br /> <br /> <br /> <br />
      </LeftSection>
    </Section>
  </>
);

export default Hero;
