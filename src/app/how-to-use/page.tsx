import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

const Guide = () => {
  return (
    <div>
      <Navbar active="Use" />
      <div className="mx-20 px-20">
        <div className="text-center">
          <h1 className="font-bold text-3xl my-14">How To Use</h1>
          <h1 className="font-bold text-3xl mb-16">3 EASY STEPS TO FOLLOW</h1>
        </div>
        <div className=" mx-40">
          <h1 className="font-bold text-3xl ">
            1. MIX A PEA-SIZED AMOUNT OF INTO WATER, MILK, TEA OR COFFEE.{" "}
          </h1>
          <p className="my-6 italic">
            <span className="font-semibold not-italic">Note: </span>
            Due to it's high quality and purity, our resin has a strong taste
            and smell. We recommend holding your breath or pinching your nose if
            the smell is too strong and use less than a pea-sized, when first
            starting.
          </p>
          <div className="flex justify-center mb-16">
            <img src="/images/mixing_in_water_gif_480x480.webp" alt="" />
          </div>
          <h1 className="font-bold text-3xl mb-5">
            2. MIX INTO WATER, TEA, MILK, ORANGE JUICE OR ANOTHER DRINK OF YOUR
            CHOICE.
          </h1>
          <div className="flex justify-center mb-16">
            <img src="/images/mixing_in_water_top_480x480.webp" alt="" />
          </div>
          <h1 className="font-bold text-3xl mb-5">
            3. FOR BEST RESULTS, LEAVE TO STAND FOR 5 MINUTES AND THEN DRINK.
          </h1>
          <div className="flex justify-center mb-16">
            <img src="/images/drinking_shilajit_480x480.webp" alt="" />
          </div>
          <p className="font-bold text-sm">
            DOSAGE INSTRUCTIONS: Take one pea-sized amount or less daily. Best
            consumed on it's own and not with food.{" "}
          </p>
          <p className="font-bold my-6 text-sm">
            STORAGE: keep in a cool, dry place away from sunlight. Keep away
            from children. If the resin is hard you can soften it by placing the
            jar in a bowl of hot water, this will soften the Shilajit.
          </p>
          <p className="font-bold text-sm mb-4 ">
            *Do not use food supplements as a replacement for a varied diet and
            a healthy lifestyle.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guide;
