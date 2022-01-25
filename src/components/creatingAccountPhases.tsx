import Button from "@/components/elements/button";
import { Tab } from "@headlessui/react";
import Input from "@/components/elements/input";
import { useAppDispatch, useAppSelector } from "@/redux/appHooks";
import {
  AuthState,
  setAddress,
  signupWithPhantom,
} from "@/redux/features/auth/authSlice";
import { useState } from "react";
import XMark from "@/components/elements/xMark";
import Solana from "@/components/elements/solana";
import EthereumIcon from "@/components/elements/ethereumIcon";

const CreatingAccountPhases = () => {
  const [username, setUsername] = useState("");

  const dispatch = useAppDispatch();

  const authState: AuthState = useAppSelector((state) => state.auth);

  const saveAddressToStore = (address: string) => dispatch(setAddress(address));

  const connectAccount = async () => {
    const response = await window.solana.connect();

    await saveAddressToStore(response.publicKey.toString());

    const encodedMessage = new TextEncoder().encode(authState.nonce);
    const signedMessage = await window.solana.signMessage(
      encodedMessage,
      "utf8",
    );

    dispatch(
      signupWithPhantom({
        username,
        wallet_type: "phantom",
        public_key: response.publicKey.toString(),
        signature: signedMessage,
        nonce: authState.nonce,
      }),
    );
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-dark-blur rounded-md py-8 px-16">
        <div className="w-full mr-10 border-r border-gray-700">
          <h3 className="text-white text-2xl font-bold mb-4">
            Get in your zone and stay there
          </h3>
          <p className="text-white text-base break-words leading-7 mb-8">
            Your account will b create in 4 steps
          </p>
          <ul className="mb-12">
            <li className="text-white mb-12">
              <div>
                <h4 className="mb-2">Unknown Communicating</h4>
                <p className="text-base text-gray-400">
                  Enjoy unknown communicating with people without providing any
                  information
                </p>
              </div>
            </li>
            <li className="text-white mb-12">
              <div>
                <h4 className="mb-2">Unknown Communicating</h4>
                <p className="text-base text-gray-400">
                  Enjoy unknown communicating with people without providing any
                  information
                </p>
              </div>
            </li>
            <li className="text-white mb-3">
              <div>
                <h4 className="mb-2">Unknown Communicating</h4>
                <p className="text-base text-gray-400">
                  Enjoy unknown communicating with people without providing any
                  information
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full ml-10">
          <Tab.Group>
            <Tab.List
              className="grid grid-cols-2 text-base rounded-3xl py-1 px-1 mb-8"
              style={{ backgroundColor: "rgba(15, 15, 15, 0.5)" }}
            >
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-800 text-white rounded-3xl py-2 px-2 mr-2"
                    : "bg-transparent text-gray-300 mr-2"
                }
              >
                Wallet
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-800 text-white rounded-3xl py-2 px-2"
                    : "bg-transparent text-gray-300"
                }
              >
                Email - Password
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="text-white">
                <div className="px-2">
                  {/*<div className="flex items-center text-base">*/}
                  {/*  <div className="mr-auto">Connect your MetaMask wallet</div>*/}
                  {/*  <Button*/}
                  {/*    onClick={() => {*/}
                  {/*      !authState.token && connectAccount();*/}
                  {/*    }}*/}
                  {/*  >*/}
                  {/*    {authState.token ? "Connected" : "Connect"}*/}
                  {/*  </Button>*/}
                  {/*</div>*/}
                  {/*<div className="w-full h-px bg-gray-700 mt-8 mb-8" />*/}
                  <div className="text-base mb-6">
                    Choose a username for your account
                  </div>
                  <p className="text-sm text-gray-400 mb-6">
                    http://secretnetwork.com/{username}
                  </p>
                  <Input
                    className="mb-10"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="text-base mb-6">Select Network Type:</div>
                  <div className="flex my-6">
                    <div className="flex flex-col items-center mr-10">
                      <Solana width={50} height={50} />
                      <div
                        className="text-white text-sm rounded py-1 px-3 mt-2"
                        style={{ backgroundColor: "#17191d" }}
                      >
                        Solana
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <EthereumIcon width={50} height={50} />
                      <div
                        className="text-white text-sm rounded py-1 px-3 mt-2"
                        style={{ backgroundColor: "#17191d" }}
                      >
                        Ethereum
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
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
                  <Button
                    onClick={() => {
                      !authState.token && connectAccount();
                    }}
                    disabled={username.length < 3}
                    block
                  >
                    Connect wallet and create account
                  </Button>
                </div>
              </Tab.Panel>
              <Tab.Panel className="text-white">
                <div className="text-base mb-6">
                  Choose a username for your account
                </div>
                <p className="text-sm text-gray-400 mb-6">
                  http://secretnetwork.com/{username}
                </p>
                <Input
                  className="mb-10"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="text-base mb-6">Email:</div>
                <Input
                  className="mb-10"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="text-base mb-6">Password:</div>
                <Input
                  className="mb-10"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button
                  onClick={() => {
                    !authState.token && connectAccount();
                  }}
                  disabled={username.length < 3}
                  block
                >
                  Create account
                </Button>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default CreatingAccountPhases;
