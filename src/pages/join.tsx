import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/elements/button";
import Input from "@/components/elements/input";
import { useAppDispatch, useAppSelector } from "@/redux/appHooks";
import { AuthState, setAddress } from "@/redux/features/auth/authSlice";
import XMark from "@/components/elements/xMark";
import HeaderAuthForm from "@/components/auth/headerAuthForm";
import BaseLayout from "@/components/layouts/baseLayout";

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

  const authState: AuthState = useAppSelector((state) => state.auth);

  const saveAddressToStore = (address: string) => dispatch(setAddress(address));

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.warn(data);

    // dispatch(
    //   signupWithPhantom({
    //     username,
    //     wallet_type: "phantom",
    //     public_key: response.publicKey.toString(),
    //     signature: signedMessage,
    //     nonce: authState.nonce,
    //   }),
    // );
  };

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
                    {...register("username", { minLength: 3 })}
                  />
                </div>
                <div>
                  <div className="text-base text-gray-400 mb-3">
                    Email{" "}
                    {errors.email && (
                      <span className="text-red-500">
                        {" "}
                        - email is not valid
                      </span>
                    )}
                  </div>
                  <Input
                    error={errors.email ? true : false}
                    placeholder="example@mail.com"
                    {...register("email", {
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                </div>
                <div className="col-span-2">
                  <div className="text-base text-gray-400 mb-3">Password</div>
                  <Input
                    type="password"
                    error={errors.password ? true : false}
                    placeholder="At least 8 chars"
                    {...register("password", { minLength: 8 })}
                  />
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
                    {...register("password-confirmation", { minLength: 8 })}
                  />
                </div>
              </div>
              <div className="mb-0">
                {errors.username && (
                  <p className="flex items-center text-sm text-red-400 mb-3">
                    <XMark width={30} height={30} />
                    Username validation failed
                  </p>
                )}
                {authState.errors &&
                  authState.errors.map((error, index) => (
                    <p
                      className="flex items-center text-sm text-red-400 mb-3"
                      key={index}
                    >
                      <XMark width={30} height={30} />
                      {error.message}
                    </p>
                  ))}
              </div>
              <Link href="/login" passHref>
                <a className="block text-sm text-white mb-8">
                  Already a member? click to login
                </a>
              </Link>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Button
                    type="submit"
                    disabled={
                      errors &&
                      Object.keys(errors).length === 0 &&
                      (watch("username") ? true : false) &&
                      (watch("email") ? true : false) &&
                      (watch("password") ? true : false)
                        ? false
                        : true
                    }
                    tailwindColorClass="bg-blue-accent"
                    block
                  >
                    Create Account
                  </Button>
                </div>
                {console.warn(errors)}
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
