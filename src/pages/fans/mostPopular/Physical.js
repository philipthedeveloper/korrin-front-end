import React from "react";
import DashBoardstars from "../DashBoardstars";
import { BsFillGiftFill } from "react-icons/bs";

const Physical = ({ id, name, orders, img, stars, gift }) => {
  let AmountGift = orders > 100 ? `${(orders / 100).toFixed(1)}k` : orders;

  return (
    <>
      <article key={id} className="mostP rounded-md shadow-xl">
        <div className="flex justify-between ">
          <h2 className="bg-[#c8f3b8] py-3 px-7 text-lg font-semibold text-center ">
            {name}
          </h2>
          <h2 className="ml-16 my-2 mr-2 text-[#66c245] font-semibold ">
            {AmountGift} Orders Completed
          </h2>
        </div>
        <img src={img} alt={name} className="mx-auto mb-10 mt-5" />
        <div className="flex justify-between px-4 py-2">
          <DashBoardstars stars={stars} />
          <div className="flex  ">
            <BsFillGiftFill className="text-[#66c245] text-3xl mr-4" />
            <h2 className="text-lg font-mono font-semibold text-[#66c245] ">
              ${gift}k Gifts
            </h2>
          </div>
        </div>
      </article>
    </>
  );
};

export default Physical;
