import { Link } from "react-router-dom";
import { auth } from "../../assets";
import { eye } from "../../constant/Icons";
import { useState } from "react";

const Auth = (props) => {
  const { children, type } = props;
  const [canSee, setCanSee] = useState(false);

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 h-fit relative">
        <img
          src={auth}
          alt="3legant furniture"
          className="w-full h-1/2 md:h-screen object-cover"
        />
        <h1 className="text-xl md:text-2xl font-semibold absolute top-5 md:top-10 left-1/2 -translate-x-1/2">
          3legant<span className="text-secondary">.</span>
        </h1>
      </div>
      <div className="w-full lg:w-1/2 flex md:items-center lg:pl-20 mt-10 px-6 pb-10 lg:pb-0">
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-semibold mb-6">
            {type === "login" ? "Sign In" : "Sign Up"}
          </h1>
          <form action="" className="flex flex-col gap-8">
            {type === "login" ? (
              <h4 className="text-lg text-secondary">
                Don’t have an accout yet?{" "}
                <Link to={"/register"} className="text-[#38CB89]">
                  Sign Up
                </Link>
              </h4>
            ) : (
              <h4 className="text-lg text-secondary">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#38CB89]">
                  Sign In
                </Link>
              </h4>
            )}

            {children}
            <div className="flex justify-between">
              {type === "login" ? (
                <div>
                  <input
                    type="checkbox"
                    className="mr-2 outline-none border-secondary"
                    id="remember"
                  />
                  <label htmlFor="remember" className="text-secondary">
                    Remember me
                  </label>
                </div>
              ) : (
                <div>
                  <input
                    type="checkbox"
                    className="mr-2 outline-none border-secondary"
                    id="agree"
                  />
                  <label htmlFor="agree" className="text-secondary">
                    I agree with Privacy Policy and Terms of Use
                  </label>
                </div>
              )}
              {type === "login" && (
                <div>
                  <Link href="#" className="font-semibold">
                    Forgot password?
                  </Link>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-md"
            >
              {type === "login" ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
