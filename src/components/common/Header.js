import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./css/Header.module.css";
import Container from "../UI/Container";

const Header = () => {
  return (
    <header>
      <Container className={classes.header}>
        <h2 id="logo" className={classes.logo}>
          <NavLink to="/" className={classes.logoWrap}>
            kakao
          </NavLink>
        </h2>
        <ul
          id="headerMenuList"
          className={`${classes.headerList} ${classes.headerCenter}`}
        >
          <li className={classes.headerListItem}>카카오</li>
          <Link to="/news">
            <li className={classes.headerListItem}>뉴스</li>
          </Link>
          <li className={classes.headerListItem}>기술과 서비스</li>
          <li className={classes.headerListItem}>약속과 책임</li>
        </ul>
        <ul
          id="headerToolList"
          className={`${classes.headerList} ${classes.headerToolList}`}
        >
          <li>
            <i className={`ri-search-line ${classes.headerToolIcon}`}></i>
          </li>
          <li>
            <i className={`ri-global-line ${classes.headerToolIcon}`}></i>
          </li>
          <li>
            <i className={`ri-moon-line ${classes.headerToolIcon}`}></i>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
