import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Projects from "./pages/Projects";
import Books from "./pages/Books";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog/:slug' element={<BlogPost />} />
          <Route path='/books' element={<Books />} />
          <Route exact path='/' element={<Navigate to='/main' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
