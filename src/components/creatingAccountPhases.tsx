import { useState } from "react";
import Button from "@/components/elements/button";
import { Tab } from "@headlessui/react";
import Input from "@/components/elements/input";

const CreatingAccountPhases = () => {
  const [address, setAddress] = useState();

  const connectAccount = async () => {
    // const eth = window.ethereum;
    //
    // const accounts = await eth.request({ method: "eth_requestAccounts" });
    //
    // setAddress(accounts[0]);
    // dispatch(ConnectWallet(accounts[0]));
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
                Metamask
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
                  <div className="flex items-center text-base">
                    <div className="mr-auto">Connect your MetaMask wallet</div>
                    <Button onClick={() => connectAccount()}>Connect</Button>
                  </div>
                  <div className="w-full h-px bg-gray-700 mt-8 mb-8" />
                  <div className="text-base mb-6">
                    Choose a username for your account
                  </div>
                  <Input className="mb-10" />
                  <Button onClick={() => console.warn("QQ")} block>
                    Create Account
                  </Button>
                </div>
              </Tab.Panel>
              <Tab.Panel className="text-white">email password way</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default CreatingAccountPhases;
