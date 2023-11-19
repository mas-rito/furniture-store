import Auth from "../components/Layouts/Auth";
import { useState } from "react";
import { eye } from "../constant/Icons";

const SignUpPage = () => {
  const [canSee, setCanSee] = useState(false);

  return (
    <Auth type="register">
      <input
        type="text"
        placeholder="Your name"
        className="pb-3 outline-none border-b"
      />
      <input
        type="text"
        placeholder="Username"
        className="pb-3 outline-none border-b"
      />
      <input
        type="text"
        placeholder="Email address"
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

export default SignUpPage;
