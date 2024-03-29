import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/components/elements";
import ConnectWithGoogleButton from "@/components/auth/login/connectWithGoogleButton";
import $axios from "@/utilities/axios";
import { useEffect, useState } from "react";
import { ButtonProps } from "@/components/elements/button";
import { useRouter } from "next/router";

const registerSchema = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email(),
  password: z
    .string()
    .max(32)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
});

type Inputs = z.infer<typeof registerSchema>;

const RegisterForm = (): JSX.Element => {
  const router = useRouter();

  const [submitState, setSubmitState] = useState<ButtonProps["state"]>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitState("loading");
    try {
      await $axios.post("/auth/register", data);
      setSubmitState("success");
      await router.push("/messenger");
    } catch (exception) {
      setSubmitState("failed");
    }
  };

  useEffect(() => {
    if (submitState === "failed") {
      const timer = setTimeout(() => {
        setSubmitState("idle");
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [submitState]);

  return (
    <div className="outline-none py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="mb-6">
            <label className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm mb-2">
              Username
            </label>
            <Input
              error={!!errors.username}
              placeholder="Enter your username"
              {...register("username", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
                minLength: {
                  value: 3,
                  message: "This field must be at least 3 charactars.",
                },
              })}
            />
          </div>
          <div className="mb-6">
            <label className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm mb-2">
              Email
            </label>
            <Input
              error={!!errors.email}
              placeholder="Enter your email address"
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
                minLength: {
                  value: 3,
                  message: "This field must be at least 3 charactars.",
                },
              })}
            />
          </div>
          <div className="mb-6">
            <label className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm mb-2">
              Password
            </label>
            <Input
              type="password"
              error={!!errors.password}
              placeholder="Enter your password here"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </div>
        </div>
        {/* {error && <div className="text-red-500 mb-3">{error}</div>} */}
        <div>
          <Button
            state={submitState}
            type="submit"
            extraClasses="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-3 mr-2 my-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            block
          >
            Create Account
          </Button>
          <div className="flex items-center py-4">
            <div className="flex-grow opacity-50 h-px bg-gray-200"></div>
            <span className="flex-shrink text-sm text-gray-400 px-4 font-light">
              Or
            </span>
            <div className="flex-grow h-px opacity-50 bg-gray-200"></div>
          </div>
          <ConnectWithGoogleButton />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
