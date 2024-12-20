import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", text: "योगिराज स्वामीजी", className: "group-hover:w-40" },
    { to: "/acharya", text: "आचार्य परम्परा", className: "group-hover:w-20" },
    { to: "/some-other-page", text: "लीलामृतम", className: "group-hover:w-20" },
  ];
  const scroll = () => {
    window.scrollBy({
      top: 150, // Corrected the semicolon to a comma
      behavior: "smooth", // Corrected 'behaviour' to 'behavior' (in US English)
    });
  };

  return (
    <div>
      <nav className="bg-transparent mt-2 ">
        {/* Mobile Menu Button */}
        <div className="md:hidden p-4 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#556b2f] hover:text-[#3e2a47]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Items */}
        <ul
          className={`
            flex flex-col md:flex-row
            p-4 md:gap-16 gap-8
            text-xl
            ${isMenuOpen ? "flex" : "hidden md:flex"}
            md:justify-start
            items-center
          `}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="font-laila font-bold text-[#556b2f] w-full md:w-auto"
            >
              <Link
                to={item.to}
                onClick={() => {
                  setIsMenuOpen(false);
                  scroll();
                }}
              >
                <div className="flex flex-col group hover:text-[#3e2a47]">
                  <div className="flex justify-center md:justify-start items-center gap-6 md:gap-12">
                    <span className="text-center md:text-left">
                      {item.text}
                    </span>
                    {/* <div className="border-l-2 border-red-500 h-10 hidden md:block"></div> */}
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <hr
                      className={`w-8 h-[0.1rem] border-t-2 border-orange-400 transition-all duration-300 ${item.className}`}
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
