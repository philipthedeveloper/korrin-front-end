import React from "react";
import { MostPopularData } from "./mockData";
import Physical from "./mostPopular/Physical";
import Online from "./mostPopular/Online";
const MostPopular = () => {
  return (
    <section className="my-60">
      <h1 className="text-center font-serif font-bold text-xl">
        Most Popular Online Live Performers
      </h1>
      <main className="DashBoard_card">
        {MostPopularData.map((items) => {
          return <Online key={items.id} {...items} />;
        })}
      </main>
      <h1 className="text-center mt-40 font-serif font-bold text-xl">
        Most Popular Physical Live Performers
      </h1>

      <main className="DashBoard_card">
        {MostPopularData.map((items) => {
          return <Physical key={items.id} {...items} />;
        })}
      </main>
    </section>
  );
};

export default MostPopular;
