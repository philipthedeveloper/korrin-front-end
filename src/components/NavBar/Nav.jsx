import React from "react";
import { Link, Outlet } from "react-router-dom";
import korin from "../../images/korin.svg";
import Burger from "./burger";
import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  heigth: 65px;
  border-bottom: 2px solid trasparent;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: 1px 3px 9px 1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 1px 3px 9px 1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 1px 3px 9px 1px rgba(0, 0, 0, 0.59);
  @media (max-width: 725px) {
    img {
      width: 9rem;
      margin-left: -10px;
    }
  }
`;

const Nav = ({ open }) => {
  return (
    <>
      <NavBar>
        <Link to={"/"}>
          <img src={korin} alt="Korin" className="max-w-[13rem] ml-5 p-2" />
        </Link>
        <Burger open={open} />
      </NavBar>
      <Outlet />
    </>
  );
};

export default Nav;
