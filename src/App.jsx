import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { createContext, useState } from "react";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import MyBlogsPage from "./pages/MyBlogsPage";
import './App.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/my-blogs" element={<MyBlogsPage/>} />
    </Route>
  )
)

export const CurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className='main-container'>
        <RouterProvider router={router} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
