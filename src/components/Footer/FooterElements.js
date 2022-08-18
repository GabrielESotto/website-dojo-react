import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
`

export const FooterWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1900px) {
    width: calc(100% - 3px);
  }
`

export const FooterText = styled.p`
  color: #fff ;
  text-align: center;
`
