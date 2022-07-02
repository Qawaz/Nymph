import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/appHooks";
import { SubmitHandler } from "react-hook-form";
import BaseLayout from "@/components/layouts/baseLayout";
import RegisterHeaderForm from "@/components/auth/register/header.register";
import RegisterForm from "@/components/auth/register/form.register";
import { registerAccount } from "@/redux/features/auth/registerSlice";
import SocialSignIn from "@/components/auth/register/socialSignIn.register";
import Link from "next/link";

export type Inputs = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    dispatch(
      registerAccount({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    )
      .unwrap()
      .then(() => router.push("/"));

  return (
    <BaseLayout>
      <RegisterHeaderForm />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-dark-blur rounded-md mb-24">
        <div className="w-full border-r border-r-gray-800 px-32">
          <RegisterForm onSubmit={onSubmit} />
        </div>
        <div className="px-32">
          <SocialSignIn />
        </div>
      </div>
      <div className="text-white text-center text-lg pb-16">
        <Link href="/login">Already have an account? Login here</Link>
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
