import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Comment = () => {
  return (
    <div className="p-4 shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
      <div className="mb-2">
        <span>about</span>
        <a
          className="text-[#399] underline text-sm font-medium decoration-1 ml-2"
          href=""
        >
          Shilajit UK
        </a>
      </div>
      <div className="mb-2 flex justify-between">
        <div>
          <StarRateIcon className="text-lg text-[#339999]" />
          <StarRateIcon className="text-lg text-[#339999]" />
          <StarRateIcon className="text-lg text-[#339999]" />
          <StarRateIcon className="text-lg text-[#339999]" />
          <StarRateIcon className="text-lg text-[#339999]" />
        </div>
        <span className="text-xs text-gray-500">02/17/2024</span>
      </div>
      <div className="mb-2">
        <AccountCircleIcon className="w-10 h-10 text-[#399]" />
        <span className="text-sm text-[#399]">D.smith</span>
      </div>
      <p className="mb-2 font-semibold">Amazing</p>
      <p className="mb-2">
        What can I say, feel like I can't function properly without the stuff 😅
        only complaint is the price for the little quantity you get but hey ho.
        Still amazing stuff.
      </p>
    </div>
  );
};

export default Comment;
