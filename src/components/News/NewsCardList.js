import React from "react";
import Container from "../UI/Container";
import Card from "./NewsCard";
import classes from "./css/NewsCardList.module.css";
import newsimg1 from "../../../src/img/newsimg1.jpeg";
import newsimg2 from "../../../src/img/newsimg2.png";
import newsimg3 from "../../../src/img/newsimg3.png";
import newsimg4 from "../../../src/img/newsimg4.jpeg";
import newsimg5 from "../../../src/img/newsimg5.png";
import newsimg6 from "../../../src/img/newsimg6.webp";
import newsimg7 from "../../../src/img/newsimg7.webp";
import newsimg8 from "../../../src/img/newsimg8.webp";
import newsimg9 from "../../../src/img/newsimg9.webp";
import newsimg10 from "../../../src/img/newsimg10.webp";
import newsimg11 from "../../../src/img/newsimg11.webp";
import newsimg12 from "../../../src/img/newsimg12.webp";

const NewsCardList = () => {
  const NewsList = [
    {
      id: Math.random(),
      title: "카카오, 서비스 장애 관련 ‘1015 피해지원 협의체’ 구성",
      kind: "보도자료",
      src: newsimg12,
      tag: ["#협의체", "#카카오", "#1015피해지원"],
      date: "2022. 11. 14",
    },
    {
      id: Math.random(),
      title:
        "카카오메이커스, 사랑의열매와 제작하는 ‘카카오프렌즈’ 기부 배지 디자인 투표 진행",
      kind: "보도자료",
      src: newsimg11,
      tag: ["#카카오메이커스", "#사랑의열매", "#한정판배지"],
      date: "2022. 11. 11",
    },
    {
      id: Math.random(),
      title: "카카오맵, 서울 지하철역 승강장 간격·높이 정보 제공",
      kind: "보도자료",
      src: newsimg10,
      tag: ["#카카오맵", "#교통약자", "#디지털접근성"],
      date: "2022. 11. 08",
    },
    {
      id: Math.random(),
      title: "카카오픽코마, 9월 일본 앱 마켓 게임 포함 매출 통합 1위 올라",
      kind: "보도자료",
      src: newsimg9,
      tag: ["#글로벌사업확대", "#카카오픽코마", "#픽코마"],
      date: "2022. 11. 04",
    },
    {
      id: Math.random(),
      title:
        "카카오, 2022년 3분기 연결 매출 1조8,587억 원, 영업이익 1,503억 원",
      kind: "보도자료",
      src: newsimg8,
      tag: ["#카카오 3분기 실적", "#IR 실적발표", "#잠정실적"],
      date: "2022. 11. 03",
    },
    {
      id: Math.random(),
      title: "카카오, 데이터센터 화재 관련 비상대책위원회 출범",
      kind: "보도자료",
      src: newsimg7,
      tag: ["#분과설치", "#비상대책위원회", "#카카오"],
      date: "2022. 10. 16",
    },
    {
      id: Math.random(),
      title: "카카오메이커스, ‘제가버치’ 프로젝트로 ‘온라인 금산인삼축제’ 개최",
      kind: "보도자료",
      src: newsimg6,
      tag: ["#카카오메이커스", "#제가버치", "#금산인삼축제"],
      date: "2022. 10. 12",
    },
    {
      id: Math.random(),
      title:
        "카카오, '카카오 클래스 7년 성과' 연구 발표를 할 건데 줄 넘어가면 쩜쩜쩜 처리할 거야 내 인생에 왈가왈부하지마",
      kind: "보도자료",
      src: newsimg1,
      tag: ["#디지털전환", "#소상공인"],
      date: "2022. 09. 29",
    },
    {
      id: Math.random(),
      title: "카카오, 우리 농가 돕는 쇼핑 프로모션 진행",
      kind: "보도자료",
      src: newsimg2,
      tag: ["#카카오톡 쇼핑하기"],
      date: "2022. 09. 29",
    },
    {
      id: Math.random(),
      title: "카카오, ‘AI VOD 클래스’로 브런치 작가들의 창작 무대 확대",
      kind: "보도자료",
      src: newsimg3,
      tag: ["#브런치", "#브런치북"],
      date: "2022. 09. 29",
    },
    {
      id: Math.random(),
      title: "카카오메이커스-카카오브레인, ‘세계 동물의 날’ 기부 프로젝트 진행",
      kind: "보도자료",
      src: newsimg4,
      tag: ["#카카오메이커스", "#카카오브레인"],
      date: "2022. 09. 29",
    },
    {
      id: Math.random(),
      title:
        "카카오, ‘카카오클라우드 스쿨’ 2기 모집은 글이 짧아서 오류가 생기기 때문에 타이틀을 늘리겠습니다",
      kind: "보도자료",
      src: newsimg5,
      tag: ["#카카오클라우드스쿨"],
      date: "2022. 09. 29",
    },
  ];
  return (
    <section className={classes.CardListSection}>
      <Container>
        <ul className={classes.CardList}>
          {NewsList.map((news) => {
            return (
              <Card
                id={news.id}
                key={news.id}
                title={news.title}
                kind={news.kind}
                src={news.src}
                tag={news.tag}
                date={news.date}
              />
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default NewsCardList;
