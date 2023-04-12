import { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props): JSX.Element => {
  return (
    <main className="flex justify-center">
      <div className="container">
        <div className="h-screen py-24">
          <div className="conatiner bg-white h-full grid grid-cols-5 shadow-sm shadow-gray-200">
            <div className="col-span-2">{children}</div>
            <div className="relative col-span-3">
              <Image src="/Nymph.png" alt="me" layout={"fill"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
