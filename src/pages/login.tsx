import { SubmitHandler } from "react-hook-form";
import BaseLayout from "@/components/layouts/baseLayout";
import RegisterHeaderForm from "@/components/auth/register/header.register";
import SocialSignIn from "@/components/auth/register/socialSignIn.register";
import LoginForm from "@/components/auth/login/form.login";
import { signIn } from "next-auth/react";

export type Inputs = {
  username_or_email: string;
  password: string;
};

const Register = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => signIn("credentials", data);

  return (
    <BaseLayout>
      <RegisterHeaderForm />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-dark-blur rounded-md mb-24">
        <div className="w-full border-r border-r-gray-800 px-32">
          <LoginForm onSubmit={onSubmit} />
        </div>
        <div className="px-32">
          <SocialSignIn />
        </div>
      </div>
      <div className="text-white text-center text-lg pb-16">
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
