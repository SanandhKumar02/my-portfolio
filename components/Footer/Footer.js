import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
        <LinkTitle>
        PHONE</LinkTitle>
        <LinkItem href="tel:+919048886815">(+91) 9048886815</LinkItem></LinkColumn>
        <LinkColumn>
        <LinkTitle>
        EMAIL</LinkTitle>
        <LinkItem href="mailto:sanandh.kumar36@gmail.com">sanandh.kumar36@gmail.com</LinkItem></LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer> 
          <Slogan>{(new Date().getFullYear())} - <em>S</em><strong>K.</strong></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/SanandhKumar02" target="_blank"><AiFillGithub size="3rem" /></SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sanandhkumar02" target="_blank"><AiFillLinkedin size="3rem" /></SocialIcons>
          <SocialIcons href="https://www.instagram.com/_____sanu____/" target="_blank"><AiFillInstagram size="3rem" /></SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
