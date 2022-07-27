import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "@/components/elements";
import { Inputs } from "@/pages/login";

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
    <div className="px-2 outline-none">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="mb-4">
            <Input
              error={errors.username_or_email ? true : false}
              placeholder="Username or Email"
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
          <div className="mb-4">
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
        {error && <div className="text-red-500 mb-3">{error}</div>}
        <div>
          <Button
            type="submit"
            extraClasses="text-black font-semibold bg-gradient-to-r from-[#02c399] via-[#02c399] to-yellow-accent"
            block
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
