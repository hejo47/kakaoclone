import React from "react";
import Container from "../UI/Container";
import classes from "./css/Categories.module.css";

const Categories = () => {
  return (
    <Container>
      <ul className={classes.categories}>
        <li className={`${classes.category} ${classes.active}`}>전체</li>
        <li className={classes.category}>보도자료</li>
        <li className={classes.category}>카카오 나우</li>
        <li className={classes.category}>미디어행사</li>
        <li className={classes.category}>지속가능경영</li>
      </ul>
    </Container>
  );
};

export default Categories;
