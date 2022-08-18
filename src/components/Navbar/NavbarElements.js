import styled from "styled-components";
import dojoLogo from '../../images/TheDojoLogoBlack.png'
import { FaSearch, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  height: 160px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 550px) {
    padding: 0 30px;
  }
`

export const NavLogo = styled(Link)`
  background: url(${dojoLogo});
  height: 130px;
  width: 130px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
`

export const NavRight = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLink = styled(Link)`
  color: #ccc;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
`

export const FaSearchs = styled(FaSearch)`
  color: white;
  width: 20px;
  height: 20px;
  margin-left: 2rem;
  cursor: pointer;
`

export const Bars = styled(FaBars)`
  color: white;
  width: 20px;
  height: 20px;
  margin-left: 2rem;
  cursor: pointer;
`
