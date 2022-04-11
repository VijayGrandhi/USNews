import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Trending from "./components/pages/Trending";
import { ArticleBody } from "./components/articlebody/ArticleBody";
import { Comments } from "./components/comment/Comments";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
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
          <Route path="/signUp" element = {<Signup />} />
          <Route path="/login01" element = {<Login />} />
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
