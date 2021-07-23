import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { BsMoon, BsFillBrightnessHighFill} from 'react-icons/bs';


import { HeaderWrapper, Div1, Div2, Div3, NavLink, SocialIcons, Logo } from './HeaderStyles';

const Header = () =>  (
  <HeaderWrapper>
    <Div1>
      <Link href="/">
        <a style={{ color: "white" }}>
          <Logo style={{fontFamily: "Space Grotesk, sans-serif"}}><em>S</em><strong>K.</strong></Logo>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>   
        </Link>
      </li>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      {/* <li>
        <ThemeSwitcher>
          <BsFillBrightnessHighFill size="3rem" />
        </ThemeSwitcher>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/SanandhKumar02" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sanandhkumar02" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_____sanu____/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </HeaderWrapper>
);

export default Header;
