import styled from "styled-components";
import backgroundImg from '../../images/bgImg.jpg'

export const HeroContainer = styled.div`
  background: url(${backgroundImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  width: 100%;
`

export const HeroContent = styled.div`
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 230px;

  @media screen and (max-width: 768px) {
    padding: 0 50px;
    padding-top: 230px;
  }

  @media screen and (max-width: 550px) {
    padding: 230px 30px;
  }
`

export const HeroDescription = styled.div`
  height: 200px;
  width: 500px;
  color: #fff;
`

export const HeroText = styled.h3`
  text-transform: uppercase;
  font-size: .8rem;
  margin-bottom: .4rem;
`

export const HeroTitle = styled.h1`
  font-size: 2.3rem;
  margin-bottom: .1rem;
  letter-spacing: 1.5px;
`

export const HeroSubtitle = styled.p`
  margin-bottom: 1.5rem;
  font-size: .9rem;
`

export const HeroButton = styled.button`
  border: 1px solid #fff;
  font-size: 1.5rem;
  text-align: center;
  background: #000;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  padding: 10px 24px;
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  &:hover{
    background: #0f0f0f
  }

`
