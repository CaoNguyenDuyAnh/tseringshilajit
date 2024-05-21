"use client";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";

interface ActiveProps {
  active: string;
}

export const Navbar: React.FC<ActiveProps> = ({ active }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSearchIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-[#3a3a3a] text-white text-center py-4 font-bold">
        FREE DELIVERY ON ALL ORDERS - SUBSCRIBE AND SAVE 20%
      </div>
      <div className="flex items-center justify-between px-20  border-b border-b-gray-200 py-3">
        <img src="/images/Logo.png" className="w-28" alt="" />
        <ul className="grid gap-2 grid-flow-col">
          <li className="px-3 py-2">
            <a
              href="/"
              className={`text-base font-semibold ${
                active === "Home" ? "border-black border-b" : ""
              } hover:border-b hover:border-black`}
            >
              Home
            </a>
          </li>
          <li className="px-3 py-2">
            <a
              href="/reviews"
              className={`text-base font-semibold ${
                active === "Reviews" ? "border-black border-b" : ""
              } hover:border-b hover:border-black`}
            >
              Reviews
            </a>
          </li>
          <li className="px-3 py-2">
            <a
              href="/how-to-use"
              className={`text-base font-semibold ${
                active === "Use" ? "border-black border-b" : ""
              } hover:border-b hover:border-black`}
            >
              How To Use Shilajit
            </a>
          </li>
          <li className="px-3 py-2">
            <a
              href="/FAQ"
              className={`text-base font-semibold ${
                active === "FAQ" ? "border-black border-b" : ""
              } hover:border-b hover:border-black`}
            >
              FAQ
            </a>
          </li>
        </ul>
        <div className="grid grid-flow-col gap-1">
          <button
            className="p-2 hover:opacity-60"
            onClick={handleSearchIconClick}
          >
            <SearchIcon className="text-2xl" />
          </button>
          <button className="p-2 hover:opacity-60">
            <ShoppingBagOutlinedIcon className="text-2xl" />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-white flex justify-center items-center h-[151px] gap-1"
          >
            <div className="relative min-w-[750px]">
              <input
                placeholder="Search"
                type="text "
                className="border border-gray-200 pr-11 pl-5 py-3 w-full"
              />
              <button>
                <SearchIcon className="absolute top-1/4 right-2.5 h-full! text-2xl" />
              </button>
            </div>
            <button onClick={handleCloseModal}>
              <CloseIcon className="text-4xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
