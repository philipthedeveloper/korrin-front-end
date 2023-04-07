import React from 'react'
import Error from  '../images/Error.svg'
import {Link} from'react-router-dom'
const ErrorPage = () => {
  return (
    <section className="flex justify-center mt-20">
      <div>
        <p className="font-bold text-2xl mb-10">Sorry Page Does Not Exist</p>
        <Link to={"/"} className="border rounded text-white bg-green-300 shadow-lg p-3">
          Back Home
        </Link>
      </div>
      <img src={Error} alt="" className="max-w-[30rem]" />
    </section>
  );
}

export default ErrorPage;
