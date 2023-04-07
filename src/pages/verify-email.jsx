import { http } from "../axios.config";
import React, { useEffect, useRef, useState } from "react";

const VerifyEmail = () => {
  const refOne = useRef({});
  const refTwo = useRef({});
  const refThree = useRef({});
  const refFour = useRef({});
  const refFive = useRef({});

  const AllRefs = [
    { id: 0, ref: refOne },
    { id: 1, ref: refTwo },
    { id: 2, ref: refThree },
    { id: 3, ref: refFour },
    { id: 4, ref: refFive },
  ];
  const [inputInView, setInputInView] = useState(0);
  const [inputValues, setInputValues] = useState([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ]);

  const onInputClick = (index) => {
    setInputInView(index);
  };

  const onInputChange = (e, index) => {
    setInputValues((prevValues) => {
      return prevValues.map((prevState) => {
        if (prevState.id === index) {
          prevState.value = e.target.value;
        }
        return prevState;
      });
    });
    if (e.target.value.length === 1) {
      if (inputInView < 4) {
        setInputInView(index + 1);
      }
    }
  };

  const onSubmit = async () => {
    const inputsWithValue = inputValues
      .filter((val) => val.value !== "")
      .map((val) => val.value);
    if (inputsWithValue.length === 5) {
      const { data } = await http.post("/auth/verify-email", {
        code: inputValues.join(""),
      });
      console.log(data);
    }
  };

  useEffect(() => {
    AllRefs.forEach((ref) => {
      if (ref.id === inputInView) {
        ref.ref.current.focus();
      }
    });
  }, [inputInView]);

  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center flex-col gap-y-6 bg-lightBg py-8 px-8">
        <h1 className="text-black font-bold text-[16px] capitalize max-w-[550px] mx-auto text-center">
          A verification code has been sent to your email associated with this
          account, please confirm your email
        </h1>
        <main className="max-w-[500px] w-[90vw] mx-auto shadow-sm bg-white rounded-md p-8 shadow-mainColor relative">
          <h1 className="text-mainColor font-bold text-center text-[18px]">
            Confirm Email
          </h1>
          <div className="flex flex-wrap mt-6 justify-center items-center gap-6 lg:max-w-[400px] mx-auto">
            {new Array(5)?.fill(null)?.map((item, index) => {
              return (
                <input
                  key={index}
                  maxLength={1}
                  className={`flex-1 max-w-[50px] h-[40px] border-2 rounded-sm text-[20px] text-center text-mainColor font-bold outline-none  ${
                    inputInView === index && "border-mainColor"
                  }`}
                  ref={AllRefs.find((ref) => ref.id === index).ref}
                  value={inputValues.find((value) => value.id == index).value}
                  onChange={(e) => {
                    onInputChange(e, index);
                  }}
                  onClick={() => {
                    onInputClick(index);
                  }}
                />
              );
            })}
          </div>
          <div className="mt-14">
            <button
              onClick={onSubmit}
              className="w-full p-3 text-white rounded-md shadow-md bg-mainColor font-bold"
            >
              Confirm
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default VerifyEmail;
