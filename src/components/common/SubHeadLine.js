import React from "react";
import Container from "../UI/Container";
import classes from "./css/SubHeadLine.module.css";

const SubHeadLine = (props) => {
  return (
    <section className={classes.headline}>
      <Container>
        <h2 className={classes.headlineTitle}>
          <i className="ri-volume-up-fill"></i>&nbsp; {props.name}
          {/* 나눠야 함 */}
        </h2>
        <h4 className={classes.headlineContent}>{props.content}</h4>
      </Container>
    </section>
  );
};

export default SubHeadLine;
