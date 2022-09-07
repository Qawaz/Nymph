import { FunctionComponent } from "react";
import Link from "next/link";
import Arrow from "./elements/arrow";

const StickyNavigation: FunctionComponent = (): JSX.Element => (
  <>
    <nav className="sticky top-0 w-full backdrop-blur border-b border-solid border-slate-800 max-w-screen">
      <div className="container flex flex-row align-middle items-center mx-auto py-5">
        <div className="font-medium text-white text-lg">
          <Link href="/">Whispers</Link>
        </div>
        <div className="flex flex-row flex-1 justify-center">
          <div className="font-medium text-gray-300 mr-14">IBC</div>
          <div className="font-medium text-gray-300 mr-14">Build on Cosmos</div>
          <div className="font-medium text-gray-300 mr-14">Community</div>
        </div>
        <Link href="/join">
          <a className="flex items-center justify-center align-middle bg-yellow-accent font-medium text-black text-sm rounded py-3 px-4">
            <span className="pr-3">Get Started</span> <Arrow />
          </a>
        </Link>
      </div>
    </nav>
    <style jsx>
      {`
        nav {
          background-color: rgba(18, 18, 29, 0.3);
        }
      `}
    </style>
  </>
);

export default StickyNavigation;
