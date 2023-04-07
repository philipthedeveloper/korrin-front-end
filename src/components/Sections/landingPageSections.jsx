import React from "react";
import { LargeButton, SmallButton } from "../UI/Button";
import { Link } from "react-router-dom";

const LandingSection = ({
  id,
  smallButtonText,
  largeButtonText,
  link,
  image,
  desc,
  index,
}) => {
  return (
    <div
      className={`w-full ${index === "odd" ? "bg-lightBg" : "bg-white"}`}
      id={id}
    >
      <section
        className={`container flex items-center justify-center ${
          index !== "odd"
            ? "sm:flex-row flex-col"
            : "sm:flex-row-reverse flex-col-reverse"
        } gap-y-[2rem]`}
      >
        <div className="flex flex-col w-full flex-1 justify-center items-center gap-y-12">
          <SmallButton text={smallButtonText} />
          <p className="text-center">{desc}</p>
          <Link to={link}>
            <LargeButton text={largeButtonText} />
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center max-w-full">
          <img
            src={image}
            alt="artistes schedule"
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
      </section>
    </div>
  );
};

export default LandingSection;
