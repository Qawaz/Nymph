import { FunctionComponent } from "react";
import Link from "next/link";
import Arrow from "./elements/arrow";

const StickyNavigation: FunctionComponent = (): JSX.Element => (
  <>
    <nav className="sticky top-0 w-full max-w-screen bg-white">
      <div className="flex flex-row align-middle items-center mx-auto py-5 px-16">
        <div className="flex flex-row flex-1 items-center">
          <Link href="/" className="font-medium text-gray-900 text-lg mr-14">
            Whispers
          </Link>
          <div className="font-medium text-gray-700 mr-14">IBC</div>
          <div className="font-medium text-gray-700 mr-14">Build on Cosmos</div>
          <div className="font-medium text-gray-700 mr-14">Community</div>
        </div>
        <Link
          href="/join"
          className="flex items-center justify-center align-middle bg-yellow-accent font-medium text-black text-sm rounded py-3 px-4"
        >
          <span className="pr-3">Get Started</span>
          <Arrow />
        </Link>
      </div>
    </nav>
  </>
);

export default StickyNavigation;
