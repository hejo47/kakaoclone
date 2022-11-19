import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/common/Categories";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import SubHeadLine from "./components/common/SubHeadLine";
import NewsCardList from "./components/News/NewsCardList";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Header />
          <SubHeadLine />
          <Categories />

          <Routes>
            <Route path="/news" element={<NewsCardList />}></Route>
            <Route path="/" element={<Welcome />}></Route>
          </Routes>

          <Footer />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
