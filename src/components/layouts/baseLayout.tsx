import { FunctionComponent } from "react";
import Link from "next/link";

const BaseLayout: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <div className="container mx-auto">
      <div className="py-16">
        <div className="w-full max-w-screen-2xl">
          <div className="flex flex-row items-start">
            <div className="font-medium text-white text-lg">
              <Link href="/">Whispers</Link>
            </div>
            <div className="flex flex-row ml-auto">
              <div className="font-medium text-white text-lg mr-14">IBC</div>
              <div className="font-medium text-white text-lg mr-14">
                Build on Cosmos
              </div>
              <div className="font-medium text-white text-lg mr-14">
                Community
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
