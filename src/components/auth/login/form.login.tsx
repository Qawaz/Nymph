import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "@/components/elements";
import { Inputs } from "@/pages/login";
import ConnectWithGoogleButton from "@/components/auth/login/connectWithGoogleButton";
import ForgotNRememberLogin from "@/components/auth/login/forgotNRemember.login";

type Props = {
  onSubmit: SubmitHandler<Inputs>;
  error: string;
};

const LoginForm = ({ onSubmit, error }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  return (
    <div className="outline-none py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="mb-6">
            <label className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm mb-2">
              Email
            </label>
            <Input
              error={!!errors.username_or_email}
              placeholder="Enter your username or email address"
              {...register("username_or_email", {
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
        {error && <div className="text-red-500 mb-3">{error}</div>}
        <ForgotNRememberLogin />
        <div>
          <Button
            type="submit"
            extraClasses="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-3 mr-2 my-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            block
          >
            Continue
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

export default LoginForm;
