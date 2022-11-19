import React from "react";
import Container from "../UI/Container";
import classes from "./css/SubHeadLine.module.css";

const SubHeadLine = () => {
  return (
    <section className={classes.headline}>
      <Container>
        <h2 className={classes.headlineTitle}>
          <i className="ri-volume-up-fill"></i>&nbsp; 뉴스 {/* 나눠야 함 */}
        </h2>
        <h4 className={classes.headlineContent}>
          가장 빠른 카카오 새소식 업데이트
        </h4>
      </Container>
    </section>
  );
};

export default SubHeadLine;
