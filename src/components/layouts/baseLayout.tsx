import { FunctionComponent } from "react";
import Link from "next/link";
import { AnimateSharedLayout, motion } from "framer-motion";

const BaseLayout: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full h-full py-16">
      <div className="w-full max-w-screen-2xl">
        <div className="flex flex-row items-start">
          <motion.div className="font-medium text-white text-lg">
            <Link href="/">Whispers</Link>
          </motion.div>
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
      <AnimateSharedLayout>{children}</AnimateSharedLayout>
    </div>
  );
};

export default BaseLayout;
