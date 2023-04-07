import React from "react";
import { data } from "./mockData";
import DashBoardstars from "./DashBoardstars";
import { BsListUl } from "react-icons/bs";

const DashBoardCard = () => {
  return (
    <section className="DashBoard_card">
      {data.map((items) => {
        const { id, name, gerne, price, img, stars, reviews, type } = items;
        return (
          <main key={id} className="singleCard shadow-xl">
            <div className="flex justify-between mb-3 font-semibold ">
              <h3>{name}</h3>
              <p className="bg-[#E3FEE0] px-3 py-1">{type}</p>
              <h3>{(gerne).toLocaleUpperCase()}</h3>
            </div>
            <img src={img} alt={name} />
            <div className=" card_body flex my-auto justify-between mt-3 font-semibold text-lg">
              <DashBoardstars stars={stars}  />
              <p>({reviews})</p>
              <p className="bg-[#E3FEE0] px-2 inline-block ">starting from</p>
              <h3>${price}</h3>
              <div className="flex cursor-pointer">
                <BsListUl className="text-2xl mr-2 mt-1" />
                <h2>more details</h2>
              </div>
            </div>
          </main>
        );
      })}
    </section>
  );
};

export default DashBoardCard;
