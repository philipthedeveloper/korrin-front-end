import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";
import DashBoardCard from "./DashBoardCard";
import MostPopular from "./MostPopular";
import morkImage from "../../images/morkImage.png";


const Dashboard = () => {
  const [input ,setInput ] = useState('')

  // function getStorage() {
  //   let Auth = { user: null, isLoading: false, isError: false };
  //   if (localStorage.getItem("testObject")) {
  //     Auth = localStorage.getItem("testObject");
  //   }
  //   return Auth;
  // }
  // console.log(getStorage());
  
  // useEffect(()=>{
  //   localStorage.setItem("testObject", JSON.stringify(log));
    
  // })
  return (
    <section className="pt-[7em] pb-3 px-16 bg-white ">
      <nav className="flex  ">
        <span className="text-4xl max-sm:relative max-sm:right-12 ">
          <BsFillArrowLeftCircleFill className=" text-[#358319]" />
        </span>
        <h1 className=" font-bold text-2xl mx-auto max-sm:text-center">
           Dashboard
        </h1>
        <div className="flex justify-between">
          <h1 className="mr-5 pt-5   font-semibold text-lg max-sm:relative max-sm:left-10 max-sm:bottom-5">
            Hello Korrin
          </h1>
          <img src={morkImage} className="dashboardImg max-sm:hidden" alt="" />
        </div>
      </nav>
      <h2 className="text-center my-16 font-bold text-lg">
        Start Having the Best Moment with Your Favorite Artistes
      </h2>

      <form className="flex max-md:justify-center">
        <input
          type="text"
          className="w-[25rem] px-4 rounded-l-md border-[1px] h-[3.5rem] border-slate-400 "
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className=" text-4xl text-slate-50 p-2  rounded-r-md bg-[#358319] ">
          <RxMagnifyingGlass />
        </button>
      </form>

      <DashBoardCard />
      <MostPopular />
    </section>
  );
};

export default Dashboard;
