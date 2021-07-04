import React from "react";
import styled from "styled-components";
import { HiTicket } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { IoIosTrendingUp } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader></SidebarHeader>
      <SidebarNav>
        <LinkWrapper>
          <Link className="nav-link" to="/tickets/all">
            <HiTicket color="white" size={24} />
            <small>Tickets</small>
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link className="nav-link" to="/agents">
            <HiUsers color="white" size={24} />
            <small>Agents</small>
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link className="nav-link">
            <IoIosTrendingUp color="white" size={24} />
            <small>Reports</small>
          </Link>
        </LinkWrapper>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 4vw;
  height: 100%;
  background-color: #31495a;
`;

const SidebarHeader = styled.div`
  width: 100%;
  height: 8%;
  background-color: #02d155;
`;

const SidebarNav = styled.nav`
  width: 100%;
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  /* background-color: #506f85; */
  padding: 10px 0px 10px 0px;
  cursor: pointer;
  Link {
  }
  > small {
    font-size: 9px;
  }
`;
