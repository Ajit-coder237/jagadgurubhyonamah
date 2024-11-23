import React from "react";

const BhagwanyogirajPage = () => {
  return (
    <div className="mt-4 h-screen flex flex-col items-center px-4">
      <div className="shadow-lg h-[75%] w-fit">
        <img
          src="/jagadguru_bhagwan-1.png"
          className="object-contain w-full h-full"
          alt="योगिराज श्री कमलनयनाचार्य स्वामी जि महाराज"
        />
      </div>
      <h1 className="font-gotu text-center tracking-[0.15em] leading-relaxed font-bold text-amber-950 text-lg md:text-xl lg:text-2xl mt-8 max-w-4xl">
        नेपाल राष्ट्र का प्रथम जगद्गुरु
        <br className="md:hidden" />
        <span className="text-amber-800"> अनन्त श्री विभुषित १००८ </span>
        <br className="md:hidden" />
        <span>आबाल ब्रह्मचारी गोदुग्धहारी</span>
        <br className="md:hidden" />
        <span className="text-amber-900">
          {" "}
          उभय वेदान्ताचार्य सत्सम्प्रदायाचार्य{" "}
        </span>
        <br className="md:hidden" />
        <span className="text-amber-950 font-extrabold">
          योगिराज श्री कमलनयनाचार्य स्वामी जि महाराज
        </span>
      </h1>
    </div>
  );
};

export default BhagwanyogirajPage;
