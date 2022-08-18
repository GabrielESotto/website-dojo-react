import styled from "styled-components";
import {FaPlus} from 'react-icons/fa'

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
`

export const FaqTitle = styled.h1`
  color: #333333;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
`

export const FaqWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`

export const FaqLine = styled.div`
  height: 50px;
  border-bottom: 1px solid rgba(204,204,204, 0.7);
  margin: 10px;
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 570px) {
    width: 350px;
  }
`

export const FaqText = styled.p`
  font-size: .8rem;
  color: #333333;
  cursor: pointer;
`

export const IconPlus = styled(FaPlus)`
  color: #333333;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover{
    transform: scale(1.1);
    color: #000;
  }
`
