import "./App.css";
import Categories from "./components/common/Categories";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import SubHeadLine from "./components/common/SubHeadLine";
import NewsCardList from "./components/News/NewsCardList";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <SubHeadLine />
        <Categories />
        <NewsCardList />
        <Footer />
      </>
    </div>
  );
}

export default App;
