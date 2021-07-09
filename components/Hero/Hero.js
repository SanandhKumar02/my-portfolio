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
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </SectionText>
      <Link href="#contact" passHref>
        <NavLink style={{marginBottom: "20px"}}>
          Connect with me
        </NavLink>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;