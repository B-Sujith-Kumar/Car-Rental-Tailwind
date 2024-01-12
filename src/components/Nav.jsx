import logo from "../images/logo/logo.png";
import Button from "./Button";

const navItems = [
  "Home",
  "About",
  "Services",
  "Vehicle Models",
  "Testimonials",
  "Our Team",
  "Contact",
];
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="">
      <nav className="flex font-rubik items-center pt-8 justify-around font-semibold max-lg-2:justify-between max-lg-2:px-6">
        <img src={logo} alt="Logo" width={145} className="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`tabler-icon tabler-icon-menu-2 lg-2:hidden cursor-pointer ${
            isOpen ? "hidden" : "block"
          } active:text-coral-red hover:text-coral-red`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
        <ul className="flex gap-6 max-lg-2:hidden">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-coral-red cursor-pointer">
              <a href="">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-8 items-center max-lg-2:hidden">
          <a href="">Sign In</a>
          <Button label="Register" />
        </div>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`tabler-icon absolute z-10 top-11 right-6  tabler-icon-menu-2 lg-2:hidden cursor-pointer ${
          isOpen ? "block" : "hidden"
        } active:text-coral-red hover-text-coral-red`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
      </svg>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg-2:hidden fixed min-h-screen bg-white w-full top-0 left-0`}
      >
        <div className="mt-32 opacity-100">
          <ul className="flex flex-col items-center justify-center gap-10 text-white font-poppins  text-center tracking-widest font-semibold text-xl ">
            <li
              className="cursor-pointer text-black hover:text-[#FA5757] mt-20 text-md tracking-widest"
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer text-black hover:text-[#FA5757] text-md tracking-widest">
              <a href="/" onClick={() => setIsOpen(!isOpen)}>
                About
              </a>
            </li>
            <li className="cursor-pointer text-black hover:text-[#FA5757] text-md tracking-widest">
              <a href="/" onClick={() => setIsOpen(!isOpen)}>
                Models
              </a>
            </li>
            <li className="cursor-pointer text-black hover:text-[#FA5757] text-md tracking-widest">
              <a href="/" onClick={() => setIsOpen(!isOpen)}>
                Testimonials
              </a>
            </li>
            <li className="cursor-pointer text-black hover:text-[#FA5757] text-md tracking-widest">
              <a href="/" onClick={() => setIsOpen(!isOpen)}>
                Our Team
              </a>
            </li>
            <li className="cursor-pointer text-black hover:text-[#FA5757] text-md tracking-widest">
              <a href="/" onClick={() => setIsOpen(!isOpen)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
