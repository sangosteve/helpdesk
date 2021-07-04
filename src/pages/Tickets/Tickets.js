import React, { useState } from "react";
import styled from "styled-components";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import AllTickets from "../../components/Tickets/AllTickets";
import PendingTickets from "../../components/Tickets/PendingTickets";
import OpenTickets from "../../components/Tickets/OpenTickets";
import OnHoldTickets from "../../components/Tickets/OnHoldTickets";
import { FiPlus } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import "./Tickets.css";
const Tickets = () => {
  const { path, url } = useRouteMatch();
  const [AllTicketsCounter, setAllTicketsCounter] = useState(0);
  return (
    <PageContainer>
      <TicketsNav>
        <TicketsNavHeader>
          <NavHeaderTitle>
            <h4>Tickets</h4>
            <button className="btn">
              <FiPlus color={10} />
              New Ticket
            </button>
          </NavHeaderTitle>
          <TicketsNavSearch>
            <input
              type="text"
              className="input-search"
              placeholder="Search in all tickets"
            />
            <FiSearch size={16} className="input-search-icon" color="#bdc3c7" />
          </TicketsNavSearch>
        </TicketsNavHeader>
        <TicketsMenu>
          <LinkWrapper>
            {/* <Link className="menu-link" to={`${url}/`} component={AllTickets}>
              <LinkText>All tickets</LinkText>
              <LinkBadge>{AllTicketsCounter}</LinkBadge>
            </Link> */}
            <Link className="menu-link" to={`${url}/open`}>
              <LinkText>Open</LinkText>
              <LinkBadge>{AllTicketsCounter}</LinkBadge>
            </Link>
            <Link className="menu-link" to={`${url}/pending`}>
              <LinkText>Pending</LinkText>
              <LinkBadge>{AllTicketsCounter}</LinkBadge>
            </Link>
            <Link className="menu-link" to={`${url}/onhold`}>
              <LinkText>On hold</LinkText>
              <LinkBadge>{AllTicketsCounter}</LinkBadge>
            </Link>
          </LinkWrapper>
        </TicketsMenu>
      </TicketsNav>

      <PageContents>
        <Switch>
          <Route path="/tickets/all" component={AllTickets} />
          <Route path="/tickets/open" component={OpenTickets} />
          <Route path="/tickets/pending" component={PendingTickets} />
          <Route path="/tickets/onhold" component={OnHoldTickets} />
        </Switch>
      </PageContents>
    </PageContainer>
  );
};

export default Tickets;
const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: azure; */
`;

const TicketsNav = styled.nav`
  width: 24%;
  height: 100%;
  background-color: rgb(243, 247, 249);
`;

const TicketsNavHeader = styled.div`
  width: 100%;
  height: 20%;
`;
const NavHeaderTitle = styled.div`
  width: 100%;
  height: 40%;
  border-bottom: 1px solid rgb(203, 212, 222);
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h4 {
    margin-left: 4%;
    color: rgb(66, 77, 87);
  }
  > button {
    margin-right: 4%;
    height: 30px;
    width: 100px;
    background-color: #27ae60;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

const TicketsNavSearch = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(203, 212, 222);
  position: relative;
`;
const TicketsMenu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

const LinkText = styled.h5`
  padding: 0;
  margin: 0;
  margin-left: 1em;
  color: rgb(66, 77, 87);
  font-weight: 500;
`;
const LinkBadge = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 1em;
  color: rgb(66, 77, 87);
`;

const PageContents = styled.div`
  width: 80%;
  height: 100%;
  background-color: "red";
`;
