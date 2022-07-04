import { SubmitHandler } from "react-hook-form";
import BaseLayout from "@/components/layouts/baseLayout";
import SocialSignIn from "@/components/auth/register/socialSignIn.register";
import LoginForm from "@/components/auth/login/form.login";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginHeaderForm from "@/components/auth/login/header.login";

export type Inputs = {
  username_or_email: string;
  password: string;
};

const Register = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    await signIn("credentials", {
      ...data,
      redirect: false,
    }).then((response) => {
      response?.status === 200
        ? router.push("/dashboard")
        : setError(response?.error || "");

      return false;
    });

  return (
    <BaseLayout>
      <LoginHeaderForm />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-dark-blur rounded-md mb-24">
        <div className="w-full border-r border-r-gray-800 px-32">
          <LoginForm onSubmit={onSubmit} error={error} />
        </div>
        <div className="px-32">
          <SocialSignIn />
        </div>
      </div>
      <div className="text-gray-300 text-center text-base pb-16">
        Forgot Password?
      </div>
      <div className="flex py-10">
        <div className="text-gray-400 text-center">Privacy Policy</div>
        <div className="text-gray-400 text-center ml-auto">
          Copyright @ Nymph 2022
        </div>
      </div>
    </BaseLayout>
  );
};

export default Register;
