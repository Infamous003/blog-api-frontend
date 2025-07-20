import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import MyBlogsPage from "./pages/MyBlogsPage";
import BlogPage from "./pages/BlogPage";
import WriteBlogPage from "./pages/WriteBlogPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";
import './App.css';
import { fetchPosts } from "./utils";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/my-blogs" element={<MyBlogsPage />} />
      <Route path="/blogs/:id" element={<BlogPage />}/>
      <Route path="/blogs/write" element={<WriteBlogPage />} />
      <Route path="/blogs/update/:id" element={<UpdateBlogPage />} />
    </Route>
  )
)

export const CurrentUserContext = createContext();
export const PostsContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://blog-api-1i1j.onrender.com/posts/"


  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const username = localStorage.getItem("username");
    if (token && username) {
      setCurrentUser(username);
    }
    fetchPosts(url, setPosts, setIsLoading)
  }, []);

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <PostsContext.Provider value={{posts, setPosts}}>
        <div className='main-container'>
          <RouterProvider router={router} />
        </div>
      </PostsContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App
