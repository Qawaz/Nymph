import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import LoginForm from "@/components/auth/login/form.login";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginHeaderForm from "@/components/auth/login/header.login";
import AuthLayout from "@/components/layouts/authLayout";

export type Inputs = {
  username_or_email: string;
  password: string;
};

const Login = (): JSX.Element => {
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
          <Link href="/register">Don&#39t have an account? Register here</Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
