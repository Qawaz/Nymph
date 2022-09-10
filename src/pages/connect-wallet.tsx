import Button from "@/components/elements/button";
import Input from "@/components/elements/input";
import { useState } from "react";
import XMark from "@/components/elements/xMark";
import Link from "next/link";
import HeaderAuthForm from "@/components/auth/register/header.register";
import BaseLayout from "@/components/layouts/baseLayout";

const ConnectWallet = () => {
  const [username, setUsername] = useState("");

  // const dispatch = useAppDispatch();

  // const authState: AuthState = useAppSelector((state) => state.auth);

  // const saveAddressToStore = (address: string) => dispatch(setAddress(address));

  const connectAccount = async () => {
    const response = await (window as any).solana.connect();

    // await saveAddressToStore(response.publicKey.toString());

    const encodedMessage = new TextEncoder().encode(authState.nonce);
    const signedMessage = await (window as any).solana.signMessage(
      encodedMessage,
      "utf8",
    );

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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-base text-gray-400 mb-3">Username</div>
                <Input
                  placeholder="SecretKeeper"
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </div>
              <div>
                <div className="text-base text-gray-400 mb-3">Email</div>
                <Input
                  placeholder="example@mail.com"
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </div>
              <div className="col-span-2">
                <div className="text-base text-gray-400 mb-3">Password</div>
                <Input
                  placeholder="At least 8 chars"
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </div>
              <div className="col-span-2">
                <div className="text-base text-gray-400 mb-3">
                  Password Cofirmation
                </div>
                <Input
                  placeholder="Confirm your password"
                  extraClassName="mb-5"
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </div>
            </div>
            {/* <div className="mb-0">
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
            </div> */}
            <Link href="/login" passHref>
              <a className="block text-sm text-white mb-8">
                Already a member? click to login
              </a>
            </Link>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Button
                  type="submit"
                  disabled={username.length < 3}
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
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ConnectWallet;
