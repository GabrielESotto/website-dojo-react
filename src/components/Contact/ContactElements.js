import styled from "styled-components";
import contactBg from '../../images/contactImg.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
`

export const ContactPartOne = styled.div`
  background: url(${contactBg});
  width: 100%;
  height: 450px;
  max-width: 1700px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const ContactForm = styled.form`
  width: 350px;
  height: 570px;
  background: #fff;
  position: relative;
  top: -70px;
  right: 50px;
  box-shadow: 5px -4px 3px -4px rgba(164,164,164,1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    top: 0;
    height: 100%;
    width: 250px;
    box-shadow: none;
  }

  @media screen and (max-width: 750px) {
    position: sticky;
    margin: 0 auto;
    box-shadow: 1px -1px 1px #a4a4a4;
    border-radius: 3px;
    height: 98%;
    margin-top: 5px;
  }
`

export const ContactTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 1rem;
  padding-top: 330px;
  padding-left: 120px;

  @media screen and (max-width: 1000px) {
    padding-left: 60px;
    font-size: 2rem;
  }

  @media screen and (max-width: 750px) {
    display: none
  }
`

export const ContactButton = styled.button`
  border: none;
  width: 190px;
  height: 50px;
  color: #fff;
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-color: #333333;
  border-radius: 5px;
  cursor: pointer;
`

export const InputName = styled.input`
  width: 300px;
  padding: 9px 0;
  margin: 10px 0;
  border: none;
  border-bottom: 1.7px solid #ccc;
  font-size: .9rem;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #000;
}

  @media screen and (max-width: 850px) {
    width: 180px;
  } 
`

export const ContactPartTwo = styled.div`
  height: 200px;
  width: 100%;
  background: #222222;

  @media screen and (min-width: 1900px) {
    width: calc(100% - 3px);
  }
`

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media screen and (max-width: 850px) {
    margin-top: 10px;
  }
`

export const ContactH3 = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;

  @media screen and (max-width: 850px) {
    margin-top: 10px;
  }
`

export const ContactP = styled.p`
  font-size: .8rem;
  font-weight: 300;
  color: #fff;
  width: 100px;
  text-align: center;
  margin-top: 20px;
  line-height: 35px;
  font-weight: bold;

  @media screen and (max-width: 850px) {
    line-height: 0;
    margin-top: 10px;
    width: 300px;
  }
`

export const ContactMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 120px;
  margin-left: 550px;

  @media screen and (max-width: 1500px) {
    margin-left: 350px;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 150px;
  }

  @media screen and (max-width: 850px) {
    margin-left: 30px;
    margin-top: 10px;
    justify-content: center;
  }
`

export const ContactFollow = styled.p`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 300;

`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 15px;

  @media screen and (max-width: 850px) {
    justify-content: center;
    width: 100px;
  }
`

export const Facebook = styled(FaFacebook)`
  height: 25px;
  width: 25px;
  color: #b5b1b1;
  margin-right: 20px;
  cursor: pointer;
`

export const Instagram = styled(FaInstagram)`
  height: 25px;
  width: 25px;
  color: #b5b1b1;
  cursor: pointer;
`

