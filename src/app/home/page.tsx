
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar active="Home" />
      <div className="pb-[55px]">
        <img className="w-full" src="/images/bgBanner.webp" alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 pt-12">Buy Himalayan Resin</h1>
        <button className="text-white bg-[#25a767] px-8 py-2 my-5 text-2xl font-bold hover:opacity-90">
          BUY NOW
        </button>
      </div>
      <div>
        <p className="absolute z-10 text-black text-base bottom-[-240px] left-36 leading-9 font-bold">
          ✓ We offer significant benefits
          <br />✓ A completely natural, time-honoured resin <br />✓ Sourced from
          16,000 feet in the Himalayas
        </p>
        <img
          className="w-full pb-14 relative"
          src="/images/Woman_Holding_straight_cropped_1950x.webp"
          alt=""
        />
      </div>
      <div className="flex items-center m-auto justify-center py-6 mx-32">
        <div className="">
          <h1 className="text-gray-300 text-5xl font-extrabold">
            Himalayan Product
          </h1>
          <p className="text-xl mt-6">
            Achieve many benefits with our Himalayan Product Resin. For use for
            men and women.
          </p>
        </div>
        <img
          className="w-5/12"
          src="/images/custom_resized_c8eed59e-7f0e-4069-aab2-29514ddba294_720x.webp"
          alt=""
        />
      </div>
      <div className="mx-28">
        <h1 className="text-4xl font-bold">
          WHAT SHILAJIT UK CUSTOMERS ARE SAYING
        </h1>
        <div>
          <StarRateIcon className="text-3xl" />
          <StarRateIcon className="text-3xl" />
          <StarRateIcon className="text-3xl" />
          <StarHalfIcon className="text-3xl" />
          <StarOutlineIcon className="text-3xl" />
        </div>
        <p className="text-slate-500 text-lg">from 283 reviews</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-28 my-6">
        <div className="p-4 shadow-2xl rounded-md grid grid-rows-[24px_minmax(auto,_1fr)_100px] gap-2">
          <div>
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
          </div>
          <h1 className=" font-semibold">Shilajit</h1>
          <p className="text-sm">
            Took a couple of days to start to kick in but feeling a lot better
            during the day now 👍👍
          </p>
          <h1 className="font-semibold text-neutral-500 mt-2">
            Liam Aulsberry
          </h1>
        </div>
        <div className="p-4 shadow-2xl rounded-md grid grid-rows-[24px_minmax(24px,_1fr)_100px] gap-2">
          <div>
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
          </div>
          <h1 className=" font-semibold">Shilajit</h1>
          <p className="text-sm">
            Took a couple of days to start to kick in but feeling a lot better
            during the day now 👍👍
          </p>
          <h1 className="font-semibold text-neutral-500 mt-2">
            Liam Aulsberry
          </h1>
        </div>
        <div className="p-4 shadow-2xl rounded-md grid grid-rows-[24px_minmax(auto,_1fr)_100px] gap-2">
          <div>
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
            <StarRateIcon className="text-xl" />
          </div>
          <h1 className=" font-semibold">Shilajit</h1>
          <p className="text-sm">
            Took a couple of days to start to kick in but feeling a lot better
            during the day now 👍👍
          </p>
          <h1 className="font-semibold text-neutral-500 mt-2">
            Liam Aulsberry
          </h1>
        </div>
      </div>
      <div className="text-center pb-12 pt-4">
        <button className="p-2">
          <ArrowBackIosIcon className="text-4xl hover:opacity-60" />
        </button>
        <button className="p-2">
          <ArrowForwardIosIcon className="text-4xl hover:opacity-60" />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
