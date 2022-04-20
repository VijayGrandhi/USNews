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
import { Sample } from "./components/pages/Sample";
import { Signup } from "./components/pages/Signup";
import { Login } from "./components/pages/Login";
import { Forums } from "./components/pages/Forums";
import ForumTile from "./components/pages/ForumTiles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <NavBar />
        <br/>
        <Routes>
          <Route path="/sample" element = {<Sample />} />
          <Route path='/home' element = {<Home />} />
          <Route path='' element = {<Home />} />
          <Route path="trending" element = {<Trending />} />
          <Route path="articlebody" element = {<ArticleBody />} />
          <Route path="/signin" element = {<Signup />} />
          <Route path="/login" element = {<Login />} />
          <Route path="forums" element = {<Forums/>} />
          <Route path="forumtiles" element = {<ForumTile/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Comments currentUserId = "1"/> */}
    </div>
  );
}

export default App;
