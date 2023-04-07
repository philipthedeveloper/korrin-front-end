import React from "react";
import { updateFansAuthDetails } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { http } from "../../axios.config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { openErrorModal } from "../../store/slices/fetchSlice";

const inputs = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
  },
  {
    name: "confirm_password",
    placeholder: "Confirm Your Password",
    type: "password",
  },
];

const RegisterFans = () => {
  const { fans } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateInput = (name, e) => {
    dispatch(updateFansAuthDetails({ key: name, value: e.target.value }));
  };

  const sign_up = async (e) => {
    e.preventDefault();
    try {
      if (fans.confirm_password === fans.password) {
        const res = await http.post(
          "/auth/register",
          {
            ...fans,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res?.data?.payload?.code);
        const { data } = await http.post("/auth/verify-email", {
          code: res?.data?.payload?.code,
        });
      }
      navigate("/fans/dashboard");
    } catch (error) {
      dispatch(openErrorModal(error?.response?.data?.error?.message));
    }
  };

  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center flex-col gap-y-6 bg-lightBg pt-[7rem] pb-8 md:px-8">
        <h1 className="text-black font-bold text-[18px] capitalize max-w-[500px] mx-auto text-center">
          Start having the best moments with your favourite artistes
        </h1>
        <main className="max-w-md w-[90vw] mx-auto shadow-sm bg-white rounded-md p-8 shadow-mainColor relative">
          <h1 className="text-white max-w-fit text-[15px] bg-mainColor font-bold p-2 rounded-md ml-auto">
            KoRin
          </h1>
          <form className="mt-8" onSubmit={sign_up}>
            <h1 className="text-center font-bold text-[18px]">
              Sign up on KoRin
            </h1>
            <div className="flex flex-col w-full gap-y-4 mt-6">
              {inputs.map((input, index) => {
                return (
                  <div className="w-full" key={index}>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      name={input.name}
                      value={fans[input.name]}
                      onChange={(e) => {
                        updateInput(input.name, e);
                      }}
                      className={styles.input}
                    />
                    {input.name === "confirm_password" &&
                      fans.confirm_password.length !== 0 &&
                      fans.confirm_password !== fans.password && (
                        <p className="text-red-400">Passwords do not match!</p>
                      )}
                  </div>
                );
              })}

              <button
                className="w-full p-3 rounded-md active:scale-[0.98] block bg-mainColor hover:shadow-md text-white"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-6 max-w-fit ml-auto font-bold text-mainColor">
            <Link to="/fans/login" className="cursor-pointer">
              Log in
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

const styles = {
  input:
    "w-full outline-none border-2 focus:border-mainColor p-3 rounded-md placeholder:text-gray-500",
};

export default RegisterFans;
