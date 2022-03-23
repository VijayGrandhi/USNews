import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Trending from "./components/pages/Trending";
import { ArticleBody } from "./components/articlebody/ArticleBody";
import { Comments } from "./components/comment/Comments";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Footer from "./components/Footer";

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
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Comments currentUserId = "1"/> */}
    </div>
  );
}

export default App;
