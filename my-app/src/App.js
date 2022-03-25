import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Trending from "./components/pages/Trending";
import { ArticleBody } from "./components/articlebody/ArticleBody";
import { Comments } from "./components/comment/Comments";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FirstPageNews from "./components/News/FirstPageNews";
import CountryMainPage from "./components/Countries/CountryMainPage";
import DetailedNews from "./components/Countries/DetailedNews";
import RankingList from "./components/Countries/RankingList";
import EducationMainPage from "./components/Education/EducationMainPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <br/>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path='home' element = {<Home />} />
          <Route path="trending" element = {<Trending />} />
          <Route path="articlebody" element = {<ArticleBody />} />
          <Route path="newsSection" element = {<FirstPageNews />} />
          <Route path="countries" element = {<CountryMainPage />} />
          {/* <Route path="detailedNews" element = {<} /> */}
          <Route path="detailedNews" element = {<DetailedNews />} />
          <Route path="rankingList" element = {<RankingList />} />
          <Route path="education" element = {<EducationMainPage />} />
          
        </Routes>
      </BrowserRouter>
      {/* <Comments currentUserId = "1"/> */}
    </div>
  );
}

export default App;
