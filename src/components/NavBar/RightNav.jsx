import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { HiMail } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { logOut } from "../../store/slices/loginSlice";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;
  z-index: 5;
  li {
    padding: 0.75rem;
    cursor: pointer;
  }

  @media (max-width: 725px) {
    flex-flow: column nowrap;
    background-color: #0d253b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }

  .mid-nav {
    display: flex;
  }
`;
const RightNav = ({ open, setOpen }) => {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <Ul open={open}>
      <a
        href={"#collaborate"}
        className="text-[#76be6e] text-xl hover:bg-slate-100 p-1"
        onClick={() => setOpen(false)}
      >
        Collaborate
      </a>
      <li>
        {user ? (
          <div
            onClick={() => setOpen(false)}
            className="flex hover:bg-slate-100 text-[#76be6e]"
          >
            <span className="text-3xl px-2">
              <HiMail />
            </span>
            <h1 className="text-center text-xl p-1 ">Messages</h1>
          </div>
        ) : (
          <Link
            to={"/fans/login"}
            className="text-[#76be6e] text-xl hover:bg-slate-100 p-1"
            onClick={() => setOpen(false)}
          >
            For Fans
          </Link>
        )}
      </li>

      {user && (
        <div
          onClick={() => setOpen(false)}
          className="flex hover:bg-slate-100 text-[#76be6e]"
        >
          <span className="text-2xl py-2">
            <FaBell />
          </span>
          <h1 className="text-xl text-cente p-1 ml-1">Notifications</h1>
        </div>
      )}
      <li>
        {user ? (
          <div
            className="flex hover:bg-slate-100 text-[#76be6e]"
            onClick={() =>{ return dispatch(logOut()), setOpen(false)}}
          >
            <h1 className="text-xl text-cente p-1">Log out</h1>
            <span className="text-2xl py-2">
              <FiLogOut />
            </span>
          </div>
        ) : (
          <Link
            to={"/artistes/login"}
            className="text-[#76be6e] text-xl hover:bg-slate-100 p-1"
            onClick={() => setOpen(false)}
          >
            For Artist
          </Link>
        )}
      </li>

      <li
        className="text-[#76be6e] text-xl hover:bg-slate-100 p-1"
        onClick={() => setOpen(false)}
      >
        FAQs{" "}
      </li>
    </Ul>
  );
};

export default RightNav;
