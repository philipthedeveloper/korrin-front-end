import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import korin from "../../images/korin.svg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/loginSlice";
import Loader from "../../components/Loader";

const Loging = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const log = useSelector((state) => state.login);

  // const Login = useSelector((state) => state.login);
  function handlePost(e) {
    e.preventDefault();
    dispatch(login({ email, password }));
  }
  useEffect(() => {
    if (log.user) {
      navigate("/fans/dashboard");
    }
  }, [log.user]);

  if (log.isLoading) {
    return <Loader />;
  }

  return (
    <section className="login">
      <p className="my-[50px] text-center text-xl mt-[6rem] p-2">
        Start Having the Best Moment with Your Favorite Artistes
      </p>
      <form
        onSubmit={(e) => handlePost(e)}
        className="mx-auto mb-10 p-5 flex flex-col align-middle justify-center bg-[#fff] shadow-2xl max-w-md w-[90vw]"
      >
        <img
          src={korin}
          alt="Korrin"
          className="max-w-[10rem] relative left-[15em] drop-shadow-lg mb-10"
        />
        <h3 className=" text-center text-lg font-bold">Sign in on KoRrin</h3>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-10 border-2 p-2 "
        />
        <input
          type="password"
          className=" mb-10 border-2 p-2 "
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#084906] mb-7 py-3 text-center text-white rounded "
        >
          Sign in
        </button>
        <div className="flex justify-between">
          <Link to={"/forgoten-password"} className="text-[#358319]">
            Forgoten Password
          </Link>
          <Link to={"/fans/register"} className="text-[#358319]">
            Create Account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Loging;
