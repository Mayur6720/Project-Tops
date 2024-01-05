import { useEffect, useState } from "react";
import logo from "../assets/Icon.png";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import {FaXmark, FaBars} from 'react-icons/fa6';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //NavItems

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Feature", path: "/features" },
    { link: "Community", path: "/community" },
    { link: "Blog", path: "/blog" },
    { link: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="w-full  bg-white md:bg-transparent fixed relative top-0 right-0 left-0">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className="flex justify-between item-center text-base gap-8">
          <p className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-[#263238]"> <Link to="/features"> NEXCENT</Link></span>
            
            
          </p>

          {/* nav items for large device */}


          <ul className="md:flex space-x-12 hidden ">
            {
              navItems.map(({link,path})=> <Link to={path} offset={-100} key={path} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">{link}</Link>)
              }
          </ul>

              {/* btn for large device */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900">Login</a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey ">Sign Up</button>
            
          </div>

          {/* menu btn for only mobile device */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
            className="focus:outline-none focus:text-gray-500">
              {
                isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
              }
            </button>
          </div>
        </div>

        {/* nav items for mobile device */}
        <div className={`space-y-4  px-4 mt-16  py-7 bg-brandPrimary ${isMenuOpen ? "block text-center fixed top-0 right-0 left-0 " : "hidden"}`}>
        {
              navItems.map(({link,path})=> <Link to={path} offset={-100} key={path} className="block text-base hover:text-white first:font-medium">{link}</Link>)
              }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
