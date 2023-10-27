"use client";
import { signIn } from "next-auth/react";

import { SecondaryButton } from "./SecondaryButton";
import GithubIcon from "../svg/GithubIcon";

function LoginButton() {
  const handleLogin = async () => {
    try {
      await signIn("github");
    } catch (err) {
      console.log("err", err);
    }
  };


  return (
    <SecondaryButton onClick={handleLogin}>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 border border-white">
        <GithubIcon />
      </div>
      <p className="hidden md:mr-2 md:block text-md">Login With Github</p>
    </SecondaryButton>
  );
}

export default LoginButton;
