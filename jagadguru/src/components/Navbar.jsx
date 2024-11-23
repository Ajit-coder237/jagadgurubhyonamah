import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-transparent mt-2 border-t-[0.01rem] border-b-[0.01rem] border-[#36454f]">
        <ul className="flex p-4 gap-16 text-xl justify-start items-center">
          <li className="font-laila font-bold text-[#556b2f]">
            <Link to="/">
              <div className="flex flex-col group hover:text-[#3e2a47]">
                <div className="flex justify-center items-center gap-12">
                  <span>श्रीआद्यजगद्गुरु कमलनयनाचार्य</span>
                  <div class="border-l-2 border-red-500 h-10"></div>
                </div>

                <hr className="w-10 h-[0.1rem] border-t-2 border-orange-400 group-hover:w-40 transition-all duration-300 " />
              </div>
            </Link>
          </li>
          <li className="font-laila font-bold text-[#556b2f]">
            <Link to="/acharya">
              <div className="flex flex-col group hover:text-[#3e2a47]">
                <div className="flex items-center gap-12">
                  <span>आचार्य परम्परा</span>
                  <div class="border-l-2 border-red-500 h-10"></div>
                </div>
                <div className=" ">
                  <hr className="w-8 h-[0.1rem] border-t-2 border-orange-400 group-hover:w-20 transition-all duration-300 " />
                </div>
              </div>
            </Link>
          </li>

          <li className="font-laila font-bold text-[#556b2f]">
            <Link to="/some-other-page">
              <div className="flex flex-col group hover:text-[#3e2a47]">
                <div className="flex justify-center items-center gap-12">
                  <span>लीलामृतम</span>
                  <div class="border-l-2 border-red-500 h-10"></div>
                </div>
                <div className=" ">
                  <hr className="w-8 h-[0.1rem] border-t-2 border-orange-400 group-hover:w-14 transition-all duration-300 " />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
