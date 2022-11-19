import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/common/Categories";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import SubHeadLine from "./components/common/SubHeadLine";
import NewsCardList from "./components/News/NewsCardList";

function App() {
  const menuList = [
    {
      name: "뉴스",
      content: "가장 빠른 카카오 새소식 업데이트",
      categories: [
        "전체",
        "보도자료",
        "카카오 나우",
        "미디어행사",
        "지속가능경영",
      ],
    },
    {
      name: "오늘의 카카오",
      content: "11월 19일 토요일 소식입니다",
      categories: null,
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Header />

          <Routes>
            <Route
              path="/news"
              element={
                <>
                  <SubHeadLine
                    name={menuList[0].name}
                    content={menuList[0].content}
                  />
                  <Categories list={menuList[0].categories} /> <NewsCardList />
                </>
              }
            ></Route>
            <Route
              path="/"
              element={
                <SubHeadLine
                  name={menuList[1].name}
                  content={menuList[1].content}
                />
              }
            ></Route>
          </Routes>

          <Footer />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
