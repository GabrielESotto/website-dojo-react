import React from 'react'
import Navbar from '../Navbar/Navbar'
import { 
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroButton
} from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroDescription>
          <HeroText>UTILIZE EVERY CHANNEL</HeroText>
          <HeroTitle>Welcome to the Dojo.com</HeroTitle>
          <HeroSubtitle>Start your virtual Dojo in minutes.</HeroSubtitle>
          <HeroButton>Start Now</HeroButton>
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
