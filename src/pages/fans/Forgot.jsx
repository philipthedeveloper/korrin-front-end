import React, { useState } from "react";
import korin from "../../images/korin.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ForgotPassswordAuth } from "../../store/slices/forgotenPasswordSlice";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  async function handlePost(e) {
    e.preventDefault();
    dispatch(ForgotPassswordAuth(email));
  }

  return (
    <section className="mx-auto align-middle ">
      <p className="my-[70px] text-center text-xl font-bold">
        Forgoten Password
      </p>
      <form
        onSubmit={(e) => handlePost(e)}
        className="mx-auto mb-10 p-5 flex flex-col align-middle justify-center bg-[#fff] shadow-2xl max-w-md"
      >
        <img
          src={korin}
          alt="Korrin"
          className="w-[10rem] relative left-[15em] mb-10 "
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-7 border-2 p-2 mb-20"
        />

        <button
          type="submit"
          className="bg-[#084906] mb-7 rounded py-3 text-center text-white"
        >
          Reset Password
        </button>
        <Link
          to={"/fans/login"}
          className="mt-6 max-w-fit ml-auto font-bold text-mainColor"
        >
          Login
        </Link>
      </form>
    </section>
  );
};

export default Forgot;
