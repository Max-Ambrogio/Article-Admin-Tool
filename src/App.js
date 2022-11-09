import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import About from './pages/About';
import BlogLanding from './pages/BlogLanding';
import BlogArticle from './pages/BlogArticle';
import Contact from './pages/Contact';
import Search from './pages/Search';
import SearchResults from './pages/SearchResult';
import AdminPost from './pages/AdminPosts';
import EditArticle from './pages/EditArticle';


function AppWrapper(props){
  return (<article>{props.children}</article>)
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<AppWrapper />} /> 
              <Route path='admin/posts/:articleId' element={<EditArticle />} />
              <Route path='admin/posts' element={<AdminPost />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='blog' element={<BlogLanding />}>
                <Route path=":blogId" element={<BlogArticle />} />
                <Route index element={<BlogArticle />} />
                <Route path='*' element={<p>Select an article</p>} />
              </Route>
              <Route path='search' element={<Search />}> 
                <Route path=':searchURI' element={<SearchResults />} />
                <Route index element={<SearchResults />} />
              </Route>
              
          </Routes>
        </main>

        <footer>
          &copy; 2022 me.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
