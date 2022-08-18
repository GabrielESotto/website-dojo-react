import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
`

export const ServiceTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
`

export const ServiceH1 = styled.h1`
  color: #333333;
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  font-weight: 300;
`

export const ServiceP = styled.p`
  color: #333333;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  font-weight: 300;
`

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 4rem;


  @media screen and (max-width: 1060px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const ServiceBox = styled.div`
  padding: 30px 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  &.div_two {
    border-width: 2px;
    border-style: solid;
    border-image: 
    linear-gradient(
      to top, 
      rgba(204,204,204),
      rgba(0, 0, 0, 0)
    ) 1 100%;
    border-image-slice: 0% fill 0% 30%;
  }

  &.div_five {
    border-width: 2px;
    border-style: solid;
    border-image: 
    linear-gradient(
      to bottom, 
      rgba(204,204,204),
      rgba(0, 0, 0, 0)
    ) 1 100%;
    border-image-slice: 25% 25% 25% 25%;
  }

  &.div_four {
    border-width: 2px;
    border-style: solid;
    border-image: 
    linear-gradient(
      to left, 
      rgba(204,204,204),
      rgba(0, 0, 0, 0)
    ) 1 100%;
    border-image-slice: 100% 1% 0% 0%;
  }

  &.div_six {
    border-width: 2px;
    border-style: solid;
    border-image: 
    linear-gradient(
      to right, 
      rgba(204,204,204),
      rgba(0, 0, 0, 0)
    ) 1 100%;
    border-image-slice: 100% 0% 0% 1%;
  }
  
  @media screen and (max-width: 720px) {
    border: none;
    border-bottom: 1px solid rgba(204, 204, 204, 0.6);
  }
`

export const ServiceImg = styled.img`
  width: 90px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ServiceSubtitleImg = styled.p`
  color: #333333;
  text-align: center;
  width: 200px;
  margin-top: 1rem;
`
