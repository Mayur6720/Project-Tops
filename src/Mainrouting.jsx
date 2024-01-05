import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./Components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Features from "./pages/Features";
import './App.css';
import DefaultNav from "./components/DefaultNav";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";

const Mainrouting = createBrowserRouter([
  {
    path: '/',
    element: <><DefaultNav><Home/><Services/><About/></DefaultNav></>,
  },
  {
    path : '/features',
    element : <><DefaultNav><Features/></DefaultNav></>
  },
  {
    path : '/community',
    element : <><DefaultNav><Community/></DefaultNav></>
  },
  {
    path : '/blog',
    element : <><DefaultNav><Blog/></DefaultNav></>
  },
  {
    path : '/pricing',
    element : <><DefaultNav><Pricing/></DefaultNav></>
  }
]);

export default Mainrouting;
