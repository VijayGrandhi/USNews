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

import Footer from "./components/Footer";
import DetailedArticle from "./components/Education/DeatiledArticle";
import EducationRankingList from "./components/Education/EducationRankingList";
import UniversityRanking from "./components/Education/UniversityRanking";
import SignIn from "./components/SignIn";
import ElectionPage from "./components/Election/ElectionMainFile";
import ElectionDetailed from "./components/Election/ElectionDetailed";
import EventMainPage from "./components/Events/EventMainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <NavBar />
        <br/>
        <Routes>
        {/* <Route path="/signIn" element = {<SignIn />} /> */}
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
          <Route path="detailedArticle" element = {<DetailedArticle />} />
          <Route path="educationRankingList" element = {<EducationRankingList />} />
          {/* <Route path="universityRanking" element = {<UniversityRanking />} /> */}
          <Route path="universityRanking" element = {<UniversityRanking />} />
          <Route path="election" element = {<ElectionPage />} />
          <Route path="electionDetailed" element = {<ElectionDetailed />} />
          <Route path="event" element = {<EventMainPage />} />
          
          
          
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Comments currentUserId = "1"/> */}
    </div>
  );
}

export default App;
