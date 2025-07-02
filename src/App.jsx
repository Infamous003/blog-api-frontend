import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import './App.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
)


function App() {
  return (
    <div className='main-container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
