import { useState } from "react";
import { eye } from "../constant/Icons";
import Auth from "../components/Layouts/Auth";

const SignInPage = () => {
  const [canSee, setCanSee] = useState(false);

  return (
    <Auth type="login">
      <input
        type="text"
        placeholder="Your username or email address"
        className="pb-3 outline-none border-b"
      />
      <div className="relative">
        <input
          type={`${canSee ? "text" : "password"}`}
          placeholder="Password"
          className="pb-3 outline-none border-b w-full"
        />
        <button
          className="outline-none absolute right-0"
          type="button"
          onClick={() => setCanSee(!canSee)}
        >
          {eye}
        </button>
      </div>
    </Auth>
  );
};

export default SignInPage;
