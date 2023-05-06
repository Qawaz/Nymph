import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import AuthLayout from "@/components/layouts/authLayout";
import RegisterHeaderForm from "@/components/auth/register/header.register";
import RegisterForm from "@/components/auth/register/form.register";

export type Inputs = {
  username: string;
  email: string;
  password: string;
};

const Register = (): JSX.Element => {
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => console.log(data);

  return (
    <AuthLayout>
      <div className="flex flex-col h-full py-24 px-20">
        <div>
          <RegisterHeaderForm />
          <RegisterForm onSubmit={onSubmit} error={error} />
        </div>
        <div className="flex flex-grow justify-center items-end text-sm">
          <Link href="/register">Don&#39t have an account? Register here</Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
