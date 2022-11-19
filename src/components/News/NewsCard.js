import React from "react";
import classes from "./css/NewsCard.module.css";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  return (
    <li className={classes.newsCard}>
      <Link to="/news/detail" className={classes.a}>
        <div className={classes.newsCardTop}>
          <div className={classes.newCardKind}>
            <i className={`ri-volume-up-fill ${classes.newsicon}`}></i>
            &nbsp;&nbsp;
            <span className={classes.kind}>{props.kind}</span>
            <span className={classes.newsDate}>{props.date}</span>
          </div>
          <i className={`ri-menu-line ${classes.menuicon}`}></i>
        </div>
        <div className={classes.newsCardTitle}>
          <p className={classes.newsTitle}>{props.title}</p>
          <ul className={classes.newsTags}>
            {props.tag.map((tags) => {
              return (
                <li className={classes.newsTag} key={Math.random()}>
                  {tags}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.newsCardImg}>
          <img
            src={props.src}
            alt={props.src}
            className={classes.newsImg}
          ></img>
        </div>
      </Link>
    </li>
  );
};

export default NewsCard;
