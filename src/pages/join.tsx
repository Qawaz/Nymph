import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/elements/button";
import Input from "@/components/elements/input";
import { useAppDispatch, useAppSelector } from "@/redux/appHooks";
import XMark from "@/components/elements/xMark";
import HeaderAuthForm from "@/components/auth/headerAuthForm";
import BaseLayout from "@/components/layouts/baseLayout";
import {
  registerAccount,
  RegisterState,
} from "@/redux/features/auth/registerSlice";
import { useRouter } from "next/router";

type Inputs = {
  username: string;
  email: string;
  password: string;
  "password-confirmation": string;
};

const CreatingAccountPhases = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const dispatch = useAppDispatch();

  const router = useRouter();

  const registerState: RegisterState = useAppSelector(
    (state) => state.register,
  );

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
      <div className="grid grid-cols-1 md:grid-cols-2 bg-dark-blur rounded-md mt-24">
        <div className="w-full ml-10">
          <HeaderAuthForm />
          <div className="px-2 outline-none">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-base text-gray-400 mb-3">Username</div>
                  <Input
                    error={errors.username ? true : false}
                    placeholder="SecretKeeper"
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
                  {errors.username && (
                    <p className="text-sm text-red-400 mt-3">
                      <XMark width={30} height={30} />
                      {errors.username.message}
                    </p>
                  )}
                </div>
                <div>
                  <div className="text-base text-gray-400 mb-3">Email</div>
                  <Input
                    error={errors.email ? true : false}
                    placeholder="example@mail.com"
                    {...register("email", {
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400 mt-3">
                      <XMark width={30} height={30} />
                      Invalid email address.
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="text-base text-gray-400 mb-3">Password</div>
                  <Input
                    type="password"
                    error={errors.password ? true : false}
                    placeholder="At least 8 chars"
                    {...register("password", {
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-400 mt-3">
                      <XMark width={30} height={30} />
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="text-base text-gray-400 mb-3">
                    Password Cofirmation
                  </div>
                  <Input
                    type="password"
                    error={errors["password-confirmation"] ? true : false}
                    placeholder="Confirm your password"
                    extraClassName="mb-5"
                    {...register("password-confirmation", {
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                  {watch("password-confirmation") !== "" &&
                    watch("password-confirmation") !== watch("password") && (
                      <p className="text-sm text-red-400 mt-3">
                        <XMark width={30} height={30} />
                        Password does not match
                      </p>
                    )}
                </div>
              </div>
              <div className="mb-0">
                {/* {registerState.errors &&
                  registerState.errors.map((error, index: number) => (
                    <p
                      className="flex items-center text-sm text-red-400 mb-3"
                      key={index}
                    >
                      <XMark width={30} height={30} />
                      {error.message}
                    </p>
                  ))} */}
              </div>
              <Link href="/login" passHref>
                <a className="block text-sm text-white mb-8">
                  Already a member? click to login
                </a>
              </Link>
              <div className="text-sm text-red-400 mb-5">
                {registerState.errors}
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Button
                    type="submit"
                    state={registerState.status}
                    disabled={
                      errors &&
                      Object.keys(errors).length === 0 &&
                      (watch("username") ? true : false) &&
                      (watch("email") ? true : false) &&
                      (watch("password") ? true : false) &&
                      (watch("password-confirmation") ? true : false) &&
                      (watch("password-confirmation") === watch("password")
                        ? true
                        : false)
                        ? false
                        : true
                    }
                    tailwindColorClass="bg-blue-accent"
                    block
                  >
                    Create Account
                  </Button>
                </div>
                <div>
                  <Button tailwindColorClass="bg-gray-500" block>
                    Change Method
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default CreatingAccountPhases;
