import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <div className=" px-14  py-8  bg-[#f6f6f6]">
      <div className="grid grid-cols-5 gap-4 pb-8 max-w-[1200px] mx-auto">
        <img src="/images/Logo.png" className="w-[100px]" alt="" />
        <div>
          <h1 className="font-semibold mb-4">Menu</h1>
          <ul>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                Home
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                About
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                FAQ
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                Contact us
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                Disclaimers
              </a>
            </li>
            <li>
              <a
                className="text-sm text-slate-600 hover:opacity-90 hover:cursor-pointer"
                href=""
              >
                Certificates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-4">Our Services</h1>
          <ul>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                Delivery Policy
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                Returns Policy
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                Refund policy
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 hover:opacity-90" href="">
                Wholesale
              </a>
            </li>
            <li>
              <a
                className="text-sm text-slate-600 hover:opacity-90 hover:cursor-pointer"
                href=""
              >
                Do not sell or share my personal information
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-4">Articles</h1>
          <ul>
            <li>
              <a
                className="text-sm text-slate-600 hover:opacity-90 hover:cursor-pointer"
                href=""
              >
                How Long Does It Take Shilajit To Work
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-4">Customer Service</h1>
          <p className="text-sm">contact@shilajituk.co.uk</p>
        </div>
      </div>
      <div className="flex max-w-[1200px] mx-auto pb-4">
        <ul className=" flex flex-wrap gap-1">
          <li className="border bg-white px-1">
            <img className="w-9 h-full " src="/images/google-pay.png" alt="" />
          </li>
          <li className="border bg-white px-1">
            <img className="w-9 h-full" src="/images/apple-pay.png" alt="" />
          </li>
          <li className="border bg-white px-1">
            <img className="w-9 h-full" src="/images/masterCard.png" alt="" />
          </li>
          <li className="border bg-white px-1">
            <img className="w-9 h-full" src="/images/visa.png" alt="" />
          </li>
          <li className="border bg-white px-1">
            <img className="w-9 h-full" src="/images/diners-club.png" alt="" />
          </li>
          <li className="border bg-white px-1">
            <img className="w-9 h-full" src="/images/discover.png" alt="" />
          </li>
          <li className="border bg-white px-1">
            <img className="w-9 h-full" src="/images/maestro.png" alt="" />
          </li>
          <li className="border bg-white px-1">
            <img className="w-9 h-full" src="/images/unionpay.png" alt="" />
          </li>
          <li className="border bg-white px-1">
            <img className="w-9 h-full" src="/images/paypal.png" alt="" />
          </li>
        </ul>
        <p className="text-xs">
          Disclaimer: Shilajit is not intended to diagnose, treat, cure, or
          alleviate any specific difficulties, struggles or illness. Consult
          with a healthcare practitioner before starting. Use as directed and
          follow all safety recommendations.
        </p>
        <p className="text-xs">© 2024. Shilajit UK. All Rights Reserved.</p>
        <div>
          <FacebookIcon />
          <TwitterIcon className="flex" />
          <LinkedInIcon />
        </div>
      </div>
      <div className=" max-w-[1200px] mx-auto">
        <select className="bg-transparent pl-2 py-1 pr-7 ">
          <option value="Vietnam">Vietnam (VND)</option>
          <option value="UnitedStates">United States (USD $)</option>
        </select>
      </div>
    </div>
  );
};
