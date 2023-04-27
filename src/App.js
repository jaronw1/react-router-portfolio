import {BrowserRouter, Routes, Route} from "react-router-dom"


import { postsArr } from './loremIpsumData'
import './App.css';
import Home from './Components/Page/Home';
import Blog from './Components/Page/Blog';
import Projects from "./Components/Page/Projects";
import About from "./Components/Page/About";
import Header from "./Components/Partials/Header";
import Post from "./Components/Page/Post";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header>
        <Routes>
          <Route 
            path="/"
            element={<Home/>}
          />

          <Route 
            path="About"
            element={<About/>}
          />

          <Route 
            path="Projects"
            element={<Projects/>} 
          />

          <Route 
            path="Blog"
            element={<Blog
                        posts={postsArr}
                    />}
          />

          <Route 
            path="/blog/:blogId"
            element={<Post
                      posts={postsArr}
                    />} 
          />

        </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
