import { useAppSelector } from "@/redux/appHooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "@/components/elements";
import { RegisterState } from "@/redux/features/auth/registerSlice";
import { Inputs } from "@/pages/register";

type Props = {
  onSubmit: SubmitHandler<Inputs>;
};

const RegisterForm = ({ onSubmit }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const registerState: RegisterState = useAppSelector(
    (state) => state.register,
  );

  return (
    <div className="px-2 outline-none">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="mb-4">
            <Input
              error={errors.username ? true : false}
              placeholder="Username"
              {...register("username", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 charactars.",
                },
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              error={errors.email ? true : false}
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </div>
          <div className="">
            <Input
              type="password"
              error={errors.password ? true : false}
              placeholder="Password"
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
        <div className="text-sm text-red-400 my-5">{registerState.errors}</div>
        <div>
          <Button
            type="submit"
            state={registerState.status}
            extraClasses="text-black bg-gradient-to-r from-[#02c399] via-[#02c399] to-yellow-accent"
            block
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
