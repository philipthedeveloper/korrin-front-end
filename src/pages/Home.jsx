import React from "react";
import LandingSection from "../components/Sections/landingPageSections";
import { AppStore, GooglePlaystore } from "../components/UI/DownloadButtons";
import { LargeButton, SmallButton } from "../components/UI/Button";
import { FiLinkedin, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
const teamMembers = [
  {
    image: "./images/issac.png",
    name: "Issac Ojerumu",
    position: "Cofounder & CTO",
  },
  {
    image: "./images/dami.png",
    name: "Damilola Oladimeji",
    position: "Cofounder & CEO",
  },
  {
    image: "./images/president.png",
    name: "Ola Oluwasanmi",
    position: "Cofounder & President",
  },
];

const footerLinks = [
  {
    title: "Products",
    links: ["Online live performance", "Physical live performance"],
  },
  {
    title: "Partners",
    links: ["Microsoft for startups", "First founders inc."],
  },
  {
    title: "About",
    links: ["About korrin", "Investors"],
  },
  {
    title: "Help",
    links: ["Customer Support", "Contact Us"],
  },
];

const socialLinks = [
  { link: "", icon: <FiLinkedin /> },
  { link: "", icon: <FiFacebook /> },
  { link: "", icon: <FiTwitter /> },
  { link: "", icon: <FiInstagram /> },
];

const Home = () => {
  return (
    <div className="bg-white">
      <header className="bg-lightBg pt-20">
        <div className="container flex sm:items-start gap-x-[1.2rem] gap-y-[2rem] sm:flex-row flex-col sm:justify-start sm:text-start text-center justify-center items-center">
          {/* content container */}
          <div className="w-full flex-1 flex flex-col gap-y-6">
            <h1 className="text-[27px] sm:text-[32px] md:text-[54px] font-[500] text-mainColor">
              Korrin Inc.
            </h1>
            <p className="text-[#1f8114] text-[16px]">
              Korrin lets fans pay you for an online or physical live
              performance.
              <br />
              Let your money make you a family to your favourite artistes.
            </p>
            <div className="flex items-center gap-x-5 sm:mt-9 mt-6 sm:justify-start justify-center">
              <GooglePlaystore />
              <AppStore />
            </div>
          </div>
          {/* image container */}
          <div className="flex-1 max-w-[300px] md:max-w-[450px] w-full mx-auto rounded-full max-h-[450px] overflow-hidden">
            <img
              src="./images/hero.png"
              alt="hero"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </header>
      {/* artiste section */}
      <section className="container flex sm:items-start items-center sm:flex-row flex-col gap-y-[2rem] bg-white">
        <div className="flex flex-col w-full flex-1 justify-center items-center sm:gap-y-8 gap-y-6">
          <SmallButton text="Artiste" />
          <p>Set Availability to time most convinient for you</p>
          <div className="w-full gap-y-[1rem] gap-x-[2rem] flex items-center justify-center">
            <GooglePlaystore />
            <AppStore />
          </div>
          <div className="w-full text-center max-w-fit mx-auto sm:mt-5">
            <Link to={"/artistes/login"}>
              <LargeButton text={"Sign in"} />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center max-w-full">
          <img
            src={"./images/iphone-artistes.png"}
            alt="artistes schedule"
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
      </section>
      {/* fans section */}
      <LandingSection
        id={"fans"}
        smallButtonText={"Fan"}
        largeButtonText={"Sign in"}
        link={"/fans/login"}
        image={"./images/iphone-scroll-artiste.png"}
        desc={"Browse, search and compare prices of your favourite artistes"}
        index={"odd"}
      />
      {/* collaborate section */}
      <LandingSection
        id={"collaborate"}
        smallButtonText={"Collaborate"}
        largeButtonText={"Start"}
        link={"/"}
        image={"./images/collaborate img 1.png"}
        desc={
          "Collaborate with greater minds in the industry and get a lot of benefits, including recommendation for endorsement deals"
        }
        index={"even"}
      />
      {/* fans section */}
      <LandingSection
        id={"fans"}
        smallButtonText={"Fans"}
        largeButtonText={"Sign in"}
        link={"/fans/login"}
        image={"./images/fans.png"}
        desc={
          "Share link with your lover, friend or relative to watch your favourite artistes perform"
        }
        index={"odd"}
      />
      {/* Teams */}
      <div className="bg-white">
        <section className="w-full container">
          <h1 className="text-center text-mainColor text-[24px] font-bold">
            Our Team
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center md:justify-between items-center flex-wrap mt-12">
            {teamMembers.map((member, index) => (
              <article
                key={index}
                className="w-full flex-1 flex justify-center items-center flex-col gap-y-2"
              >
                <div className="max-w-[250px] max-h-[250px] rounded-full overflow-hidden">
                  <img
                    alt={member.name}
                    src={member.image}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h1 className="font-bold text-[18px] mt-5">{member.name}</h1>
                <p>{member.position}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <footer className="bg-mainColor w-full text-white">
        <div className="container gap-x-[1rem] gap-y-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {footerLinks.map((link, index) => {
            return (
              <div className="flex flex-col gap-y-4" key={index}>
                <h1 className="text-[1.1rem] font-bold">{link.title}</h1>
                <ul className="flex flex-col gap-y-2 text-[0.95rem] leading-[1.3]">
                  {link.links.map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="">
            <h1 className="text-[1.1rem] font-bold mb-1">Discover Us</h1>
            <p className="text-[0.95rem] leading-[1.3] mb-4">
              651 N Broad St, 201, Middletown Delaware 19709, United States
            </p>
            <p className="text-[0.95rem] leading-[1.3] mb-4">
              4, Soretire street, Ogba, Ikeja, Lagos
            </p>

            <h1 className="text-[1rem] font-bold"> Get Korrin</h1>
            <div className="flex flex-col gap-y-2 mt-2">
              <GooglePlaystore />
              <AppStore />
            </div>
            <div className="mt-3">
              <h1 className="text-[1rem] font-bold">Follow Us</h1>
              <ul className="flex flex-row gap-x-2 mt-2">
                {socialLinks.map((social, index) => {
                  return (
                    <li
                      key={index}
                      className="w-[30px] h-[30px] text-[20px] bg-white flex justify-center items-center rounded-full text-mainColor"
                    >
                      <a href={social.link}>{social.icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
