import { SubmitHandler } from "react-hook-form";
import LoginForm from "@/components/auth/login/form.login";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginHeaderForm from "@/components/auth/login/header.login";
import AuthLayout from "@/components/layouts/authLayout";
import Link from "next/link";

export type Inputs = {
  username_or_email: string;
  password: string;
};

const Register = (): JSX.Element => {
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    await signIn("credentials", {
      ...data,
      redirect: false,
    }).then((response) => {
      response?.status === 200
        ? router.push("/messenger")
        : setError(response?.error || "");

      return false;
    });

  return (
    <AuthLayout>
      <div className="flex flex-col h-full py-24 px-20">
        <div>
          <LoginHeaderForm />
          <LoginForm onSubmit={onSubmit} error={error} />
        </div>
        <div className="flex flex-grow justify-center items-end text-sm">
          <Link href="/register">Don't have an account? Register here</Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
