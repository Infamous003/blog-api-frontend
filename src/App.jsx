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
import './App.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/my-blogs" element={<MyBlogsPage />} />
      <Route path="/blogs/:id" element={<BlogPage />}/>
    </Route>
  )
)

export const CurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const username = localStorage.getItem("username");
    if (token && username) {
      setCurrentUser(username);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className='main-container'>
        <RouterProvider router={router} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
