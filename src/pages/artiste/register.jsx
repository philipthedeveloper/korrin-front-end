import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import korin from "../../images/korin.svg";
import { signUp } from "../../store/slices/signUpSlice";

const ArtisteSignUp = () => {
  const [auth, setAuth] = useState({
    email: "",
    name: "",
    password: "",
    confirm_password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const log = useSelector((state) => state.signUp);

  function handleChange(e) {
    setAuth(() => ({ ...auth, [e.target.name]: e.target.value }));
  }

  async function handlePost(e) {
    e.preventDefault();
    const data = await dispatch(signUp({ ...auth }));
    if (!data?.error) {
      navigate("/artistes/dashboard");
    }
  }
  return (
    <section className="">
      <p className="mt-[7em] mb-10 text-center text-xl p-2">
        Start Having the Best Moment with Your Favorite Artistes
      </p>
      <form
        className="mx-auto mb-10 p-5 flex flex-col align-middle justify-center bg-[#fff] shadow-2xl max-w-md w-[90vw]"
        onSubmit={(e) => handlePost(e)}
      >
        <img
          src={korin}
          alt="Korrin"
          className="max-w-[10rem] relative left-[15em] drop-shadow-lg mb-10 "
        />
        <h3 className=" text-center text-lg font-bold">Sign Up on KoRrin</h3>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={auth.name || ""}
          onChange={handleChange}
          className="mt-5 border-2 p-2 "
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={auth.email || ""}
          onChange={handleChange}
          className="mt-5 border-2 p-2 "
        />
        <div className="my-5 ">
          <input
            type="password"
            className="w-full border-2 p-2 mb-1"
            placeholder="Password"
            name="password"
            value={auth.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className=" mb-10">
          <input
            type="password"
            className="w-full border-2 p-2 mb-1"
            placeholder="Confirm password"
            name="confirm_password"
            value={auth.confirm_password || ""}
            onChange={handleChange}
          />
          {auth.password !== auth.confirm_password && (
            <p className="text-red-400">Passwords do not match!</p>
          )}
        </div>
        <button
          // onClick={(e) => handlePost(e)}
          type="submit"
          className="bg-[#084906] mb-7 py-3 text-center text-white rounded "
        >
          Sign Up
        </button>
        <Link
          to={"/artistes/login"}
          className="text-[#358319] text-lg mt-6 max-w-fit ml-auto font-bold"
        >
          Login
        </Link>
      </form>
    </section>
  );
};

export default ArtisteSignUp;
