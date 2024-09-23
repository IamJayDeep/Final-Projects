import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../Constants";
import { Menu, X } from "lucide-react";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import Profile from "./Profile";

function Nav() {
  const { user, isAuthenticated } = useAuth0();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tighter">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:underline underline-offset-2 decoration-orange-500"
                >
                  {item.label}{" "}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justift-center space-x-12 items-center">
            {isAuthenticated ? <Logout /> : <Login />}
            {isAuthenticated ? <Profile /> : ""}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>
              {isMobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 ">
              {/* <a href="#" className="px-3 py-2 border rounded-md">
                Sign In
              </a> */}
              {isAuthenticated ? <Logout /> : <Login />}
              {isAuthenticated ? <Profile /> : ""}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
