import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { Question } from "../components/question/Question";

const FAQ = () => {
  return (
    <div>
      <Navbar active="FAQ" />
      <div className="mx-20 px-20">
        <div className="text-center">
          <h1 className="font-bold text-3xl my-14">
            Frequently Asked Questions
          </h1>
        </div>
        <Question
          question="WHAT IS SHILAJIT?"
          answer="Shilajit is a sticky substance found primarily in the rocks of the Himalayas. It develops over centuries from the slow decomposition of plants and is commonly used in Ayurvedic medicine."
        />
        <Question
          question="HOW SHOULD I TAKE SHILAJIT?"
          answer="Shilajit should be taken with a glass of milk, water, tea or coffee on an empty stomach."
        />
        <Question
          question="WHAT DOES SHILAJIT TASTE LIKE?"
          answer="Shilajit has a distinct earthy taste. The flavor can be quite strong and unique, but this is a sign of its mineral-rich content and potency."
        />
        <Question
          question="WHERE DOES YOUR SHILAJIT COME FROM?"
          answer="Our Shilajit is responsibly sourced from the high-altitude regions of the Himalayas."
        />
        <Question
          question="IS YOUR SHILAJIT PURE AND FREE FROM CONTAMINANTS?"
          answer="Yes, our Shilajit is rigorously tested for purity and safety."
        />
        <Question
          question="HOW LONG DOES IT TAKE FOR SHILAJIT TO WORK?"
          answer="The time it takes for Shilajit to have an effect can vary from person to person. Some may notice benefits within a few days, while for others it may take several weeks. Consistency is key when taking Shilajit."
        />
        <Question
          question="DO YOU SHIP INTERNATIONALLY? "
          answer="No, at the moment we only ship in the UK. Please see our Shipping & Returns pages for more details."
        />
        <Question
          question="HOW CAN I CONTACT CUSTOMER SUPPORT IF I HAVE ANY QUESTIONS OR ISSUES WITH MY ORDER?"
          answer="You can reach us through the Contact Us page on our website, or directly at contact@shilajituk.co.uk. We aim to respond to all queries within 24 hours."
        />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
