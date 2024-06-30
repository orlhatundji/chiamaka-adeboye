import * as React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="z-50 bg-foreground border-b border-black relative flex flex-col items-center justify-center">
    <div className="container fixed flex self-center items-center justify-between py-8 mx-auto">
      <Link to="/">
        <span className="font-semibold">Chiamaka Adeboye</span>
      </Link>
      <ul className="flex items-center justify-between gap-x-6 text-primary text-base leading-4">
        <li className="">
          <Link to="/">Work</Link>
        </li>
        <li className="">
          <Link to="/about">About</Link>
        </li>
        <li className="">
          
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
    <div className="h-20"></div>
  </header>
);

export default Header;
