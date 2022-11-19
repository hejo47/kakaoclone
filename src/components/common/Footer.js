import React from "react";
import Container from "../UI/Container";
import classes from "./css/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Container className={classes.footerContainer}>
        <ul className={classes.footerDepth1List}>
          <li className={classes.footerDepth1Item}>
            카카오
            <ul className={classes.footerDepth2List}>
              <li className={classes.footerDepth2Item}>카카오 문화</li>
              <li className={classes.footerDepth2Item}>공동체</li>
              <li className={classes.footerDepth2Item}>히스토리</li>
            </ul>
          </li>
          <li className={classes.footerDepth1Item}>뉴스</li>
          <li className={classes.footerDepth1Item}>
            기술과 서비스
            <ul className={classes.footerDepth2List}>
              <li className={classes.footerDepth2Item}>기술</li>
              <li className={classes.footerDepth2Item}>서비스</li>
            </ul>
          </li>
          <li className={classes.footerDepth1Item}>
            약속과 책임
            <ul className={classes.footerDepth2List}>
              <li className={classes.footerDepth2Item}>ESG</li>
              <li className={classes.footerDepth2Item}>소셜임팩트</li>
              <li className={classes.footerDepth2Item}>디지털 권리</li>
              <li className={classes.footerDepth2Item}>AI 윤리</li>
            </ul>
          </li>
          <li className={classes.footerDepth1Item}>
            투자정보
            <ul className={classes.footerDepth2List}>
              <li className={classes.footerDepth2Item}>기업지배구조</li>
              <li className={classes.footerDepth2Item}>주가정보</li>
              <li className={classes.footerDepth2Item}>재무정보</li>
              <li className={classes.footerDepth2Item}>IR행사</li>
              <li className={classes.footerDepth2Item}>공시정보</li>
              <li className={classes.footerDepth2Item}>공고</li>
            </ul>
          </li>
          <li className={classes.footerDepth1Item}>
            고객센터
            <ul className={classes.footerDepth2List}>
              <li className={classes.footerDepth2Item}>카카오 고객센터</li>
              <li className={classes.footerDepth2Item}>Daum 고객센터</li>
              <li className={classes.footerDepth2Item_depth1}>인재영입</li>
              <li className={classes.footerDepth2Item_depth1}>카카오계정</li>
            </ul>
          </li>
        </ul>
        <ul className={classes.footerDepth1List_bottom}>
          <li className={classes.footerDepth2List_bottom}>이용약관</li>
          <li className={classes.footerDepth2List_bottom}>
            위치기반서비스이용약관
          </li>
          <li className={classes.footerDepth2List_bottom}>개인정보처리방침</li>
          <li className={classes.footerDepth2List_bottom}>운영정책</li>
          <li className={classes.footerDepth2List_bottom}>청소년보호정책</li>
          <li className={classes.footerDepth2List_bottom}>브랜드보호정책</li>
          <li className={classes.footerDepth2List_bottom}>권리침해신고안내</li>
          <li className={classes.footerDepth2List_bottom}>공지사항</li>
          <li className={classes.footerDepth2List_bottom}>사이버윤리실</li>
          <li className={classes.footerDepth2List_bottom}>Contact Us</li>
        </ul>
        <div className={classes.anotherPage}>
          <span>관련사이트</span>
          <span>
            <i className="ri-add-line"></i>
          </span>
        </div>
        <div className={classes.copy}>
          <span>© Kakao Corp. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
