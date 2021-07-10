import Link from 'next/link';
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, NavLink } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Hi👋🏻 <br/>
        I&apos;m Sanandh...
      </SectionTitle>
      <SectionText>

      </SectionText>
      <Link href="#contact" passHref>
        <NavLink style={{marginBottom: "20px", fontFamily: "Space Grotesk, sans-serif"}}>
          Connect with me
        </NavLink>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;