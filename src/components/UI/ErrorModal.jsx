import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
import { closeErrorModal } from "../../store/slices/fetchSlice";

const ErrorModal = () => {
  const { errorModalOpen, errorText } = useSelector((state) => state.fetch);
  const dispatch = useDispatch();
  if (!errorModalOpen) {
    return <></>;
  }
  return (
    <section className="w-full min-h-screen bg-[rgba(0,0,0,0.4)] flex justify-center items-center fixed top-0 left0=-0 z-[4]">
      <div className="w-[90vw] bg-white shadow-md rounded-md p-8 max-w-[400px] mx-auto">
        <span
          className="cursor-pointer block max-w-fit ml-auto text-[24px] text-[darkRed]"
          onClick={() => {
            dispatch(closeErrorModal());
          }}
        >
          <FaTimes />
        </span>
        <div className="text-[darkRed] text-center text-[60px] max-w-fit mx-auto mt-4 mb-4">
          <FaExclamationTriangle />
        </div>
        <h2 className="text-[20px] font-bold text-center">{errorText}</h2>
      </div>
    </section>
  );
};

export default ErrorModal;
