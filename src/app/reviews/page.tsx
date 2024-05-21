"use client";
import React, { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Comment from "../components/comment/Comment";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("productReviews");
  const [review, setReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      const fileArray = Array.from(fileList);
      setFiles((prevFiles) => [...prevFiles, ...fileArray]);
    }
  };
  const handleClick = (value: number) => {
    setRating(value);
  };
  const handleDeleteFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reviewData = {
      rating,
      reviewTitle,
      reviewContent,
      youtubeURL,
      name,
      email,
      files,
    };

    console.log("Submitting review:", reviewData);
  };
  return (
    <>
      <Navbar active="Reviews" />
      <div className="mx-20">
        <h1 className="text-center text-xl font-bold mb-5">Reviews</h1>
        <div className="grid grid-cols-3 justify-center text-center mb-5">
          <div>
            <div className="flex items-center justify-center">
              <StarRateIcon className="text-xl text-[#339999]" />
              <StarRateIcon className="text-xl text-[#339999]" />
              <StarRateIcon className="text-xl text-[#339999]" />
              <StarRateIcon className="text-xl text-[#339999]" />
              <StarHalfIcon className="text-xl text-[#339999]" />
              4.71 out of 5
            </div>
            <p>Based on 285 reviews</p>
          </div>
          <div className="border-x border-x-gray-200 ">
            <div className="grid grid-cols-3 items-center justify-center">
              <div>
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
              </div>
              <div className="border w-full bg-[#e0e0e080]">
                <div className="h-[14px] w-[126px] bg-[#339999]"></div>
              </div>
              257
            </div>
            <div className="grid grid-cols-3 items-center justify-center">
              <div>
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
              </div>
              <div className="border w-full bg-[#e0e0e080]">
                <div className="h-[14px] w-[4px] bg-[#339999]"></div>
              </div>
              6
            </div>
            <div className="grid grid-cols-3 items-center justify-center">
              <div>
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
              </div>
              <div className="border w-full bg-[#e0e0e080]">
                <div className="h-[14px] w-[2px] bg-[#339999]"></div>
              </div>
              3
            </div>
            <div className="grid grid-cols-3 items-center justify-center">
              <div>
                <StarRateIcon className="text-base text-[#339999]" />
                <StarRateIcon className="text-base text-[rgb(51,153,153)]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
              </div>
              <div className="border w-full bg-[#e0e0e080]">
                <div className="h-[14px] w-[2px] bg-[#339999]"></div>
              </div>
              4
            </div>
            <div className="grid grid-cols-3 items-center justify-center">
              <div>
                <StarRateIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
                <StarOutlineIcon className="text-base text-[#339999]" />
              </div>
              <div className="border w-full bg-[#e0e0e080]">
                <div className="h-[14px] w-[10px] bg-[#339999]"></div>
              </div>
              15
            </div>
          </div>
          <div className="">
            <button
              onClick={() => setReview(!review)}
              className="bg-[#339999] py-2 px-8 text-white font-bold"
            >
              {review ? "Cancel review" : "Write a store review"}
            </button>
          </div>
        </div>
        {review && (
          <form
            onSubmit={handleSubmit}
            className="text-center py-8 border-t border-t-gray-200 mx-[405px]"
          >
            <h1 className="text-xl font-bold mb-5">Write a review</h1>
            <p className="mb-2">Rating</p>
            <div className="pb-7">
              {[1, 2, 3, 4, 5].map((index) => (
                <span
                  key={index}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => handleClick(index)}
                >
                  {index <= (hover || rating) ? (
                    <StarRateIcon className="hover:cursor-pointer text-[#339999]" />
                  ) : (
                    <StarOutlineIcon className="text-[#ccc]" />
                  )}
                </span>
              ))}
            </div>
            <div className="mb-6">
              <p className="mb-2">
                Review Title{" "}
                <span className="text-xs text-gray-400">(100)</span>
              </p>
              <input
                className="px-4 py-2 border border-gray-200 text-sm w-[550px]"
                placeholder="Give your review a title"
                type="text"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="mb-2">Review</p>
              <textarea
                className="px-4 py-2 border border-gray-200 text-sm w-[550px] h-40"
                placeholder="Write your comments here"
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="mb-2">Picture/Video (optional)</p>
              <div className="relative w-32 h-32 m-auto border border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileUploadIcon className="text-[80px] text-gray-500" />
                </div>
                <input
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  multiple
                  accept="image/gif,image/jpeg,image/jpg,image/png,image/webp,video/mov,video/mp4,video/x-m4v,video/*"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex flex-wrap mt-4">
                {files.map((file, index) => {
                  const fileURL = URL.createObjectURL(file);
                  return (
                    <div key={index} className="relative m-2 ">
                      {file.type.startsWith("image/") ? (
                        <img
                          src={fileURL}
                          alt={`file-preview-${index}`}
                          className="w-28 h-28 object-cover border border-gray-200"
                        />
                      ) : (
                        <video
                          src={fileURL}
                          controls
                          className="w-28 h-28 object-cover border border-gray-200"
                        ></video>
                      )}
                      <button
                        type="button"
                        className="absolute top-0 right-0 bg-white px-1 pb-0.5 rounded-full shadow-md hover:text-white hover:bg-[#339999]"
                        onClick={() => handleDeleteFile(index)}
                      >
                        <DeleteIcon className="text-base " />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-6">
              <input
                className="px-4 py-2 border border-gray-200 text-sm w-[550px]"
                placeholder="Youtube URL"
                type="text"
                value={youtubeURL}
                onChange={(e) => setYoutubeURL(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="mb-2">Name</p>
              <input
                className="px-4 py-2 border border-gray-200 text-sm w-[550px]"
                placeholder="Enter your name (public)"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="mb-2">Email</p>
              <input
                className="px-4 py-2 border border-gray-200 text-sm w-[550px]"
                placeholder="Enter your email (private)"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="mb-6 text-sm">
                How we use your data: We’ll only contact you about the review
                you left, and only if necessary. By submitting your review, you
                agree to Judge.me’s terms, privacy and content policies.
              </p>
              <button
                type="button"
                className="px-4 py-1.5 text-[#399] border-2 border-[#399] font-bold mr-3 hover:opacity-70"
                onClick={() => setReview(false)}
              >
                Cancel review
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#399] font-bold text-white border border-[#399] hover:opacity-70"
              >
                Submit Review
              </button>
            </div>
          </form>
        )}
        <div className="flex py-8 justify-center gap-4 border-t border-t-gray-200 mx-20">
          <img className="w-20" src="/images/goldAuthenticity.svg" alt="" />
          <img className="w-20" src="/images/verifiedReview.svg" alt="" />
          <img className="w-20" src="/images/silver.svg" alt="" />
          <img className="w-20" src="/images/topTrending.svg" alt="" />
          <img className="w-20" src="/images/top10.svg" alt="" />
        </div>
        <div className="px-20">
          <div className="p-4 shadow-[0_4px_16px_rgba(0,0,0,0.1)] mb-6">
            <div className="pb-3">
              <button
                onClick={() => {
                  setActiveTab("productReviews");
                }}
                className={
                  activeTab === "productReviews"
                    ? "text-[#399] cursor-default bg-[#3399991a] py-2 px-4 text-sm"
                    : "text-[#399] underline text-sm decoration-1 ml-4 mr-4 hover:no-underline"
                }
              >
                Product Reviews (280)
              </button>
              <button
                onClick={() => {
                  setActiveTab("shopReviews");
                }}
                className={
                  activeTab === "shopReviews"
                    ? "text-[#399] cursor-default bg-[#3399991a] py-2 px-4 text-sm"
                    : "text-[#399] underline text-sm decoration-1 ml-4 hover:no-underline"
                }
              >
                Shop Reviews (6)
              </button>
            </div>
            <div className="block pt-4 border-t border-t-gray-200">
              <select className="text-sm text-[#399] p-2 cursor-pointer">
                <option value="mostRecent" className="text-black">
                  Most Recent
                </option>
                <option value="highestRating" className="text-black">
                  Highest Rating
                </option>
                <option value="lowestRating" className="text-black">
                  Lowest Rating
                </option>
                <option value="onlyPictures" className="text-black">
                  Only Pictures
                </option>
                <option value="picturesFirst" className="text-black">
                  Pictures First
                </option>
                <option value="videosFirst" className="text-black">
                  Videos First
                </option>
                <option value="mostHelpful" className="text-black">
                  Most Helpful
                </option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reviews;
