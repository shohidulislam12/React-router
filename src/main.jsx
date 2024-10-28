import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header/Header';
import About from './assets/About/About';
import Contact from './assets/About/Contact/Contact';
import User from './User/User';
import UserDetails from './User/User/UserDetais/UserDetails';
import Posts from './Posts/Posts';
import PostDatails from './Posts/PostDatails';
import Error from './Errorpage/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[
{
  path:'/about',
  element:<About></About>
},
{
  path:'/contact',
  element:<Contact></Contact>
},

  {
    path:'user',
    loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),

    element:<User/>
  },
  {
    path:'/user/:userId',
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    element:<UserDetails></UserDetails>
  },
  {
    path:'/posts',
    loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
    element:<Posts></Posts>
  },{
    path:'/post/:postId',
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    element:<PostDatails></PostDatails>
  }
    ]
  },
  {
    path:'header',
    element:<Header></Header>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
