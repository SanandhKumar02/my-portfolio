import Link from 'next/link';
import React from 'react';

import { Section, SectionText, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import { LeftSection, NavLink } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Hi👋🏻 <br/>
        I&apos;m Sanandh...
      </SectionTitle>
      <SectionText>
        Full Stack Developer.<br />
      </SectionText>
      <Link href="mailto:sanandh.kumar36@gmail.com" passHref>
        <NavLink style={{marginBottom: "20px", fontFamily: "Space Grotesk, sans-serif"}}>
          Connect with me
        </NavLink>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;