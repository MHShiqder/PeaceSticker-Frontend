import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n/i18n.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import About from './Pages/About/About.jsx';
import Kit from './Pages/Kit/Kit.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import Payment from './Component/Payment/Payment';
import Contact from './Pages/Contact/Contact';
import BlogList from './Pages/Blogs/Bloglist';
import BlogUpload from './Pages/Blogs/BlogUpload';
import BlogDetail from './Pages/Blogs/BlogDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<App />,
      },
      {
        path:"/about",
        element:<About></About>,
      },
      {
        path:"/kit",
        element:<Kit/>,
      },
      {
        path:"/checkout",
        element:<Checkout/>,
      },
      {
        path:"/payment",
        element:<Payment/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/blogs",
        element:<BlogList/>,
      },
      {
        path:"/blog/:id",
        element:<BlogDetail/>,
      },
      {
        path:"/blogs-upload",
        element:<BlogUpload/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
