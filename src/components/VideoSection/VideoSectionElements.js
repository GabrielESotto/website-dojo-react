import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
`

export const VideoIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`

export const VideoTitle = styled.h1`
  color: #333333;
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  font-weight: 300;
`

export const VideoSubtitle = styled.p`
  color: #333333;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  font-weight: 300;
  text-align: center;
`

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;

  @media screen and (max-width: 1060px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 10px;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

export const VideoBox = styled.img`
  width: 200px;
  height: 200px;
  border: transparent;
  margin: 0 60px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover{
    transform: scale(1.1);
  }
`
