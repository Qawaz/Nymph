import { FunctionComponent } from "react";
import Link from "next/link";
import Checkmark from "@/components/elements/checkmark";

const IndexHeader: FunctionComponent = (): JSX.Element => (
  <>
    <div className="promotion flex items-center align-middle justify-center text-white text-sm py-3">
      <span className="pr-3">
        How Whisper Supercharged their Promotions with SecretKeeper and Hera?
      </span>
      <div className="promotion-btn cursor-pointer rounded text-xs px-3 py-2">
        Read case study
      </div>
    </div>
    <header>
      <div className="container mx-auto py-10	">
        <div className="w-full max-w-screen-2xl">
          <div className="flex flex-row align-middle items-center">
            <div className="font-medium text-white text-lg">
              <Link href="/">Whispers</Link>
            </div>
            <div className="flex flex-row flex-1 justify-center">
              <div className="font-medium text-white text-lg mr-14">IBC</div>
              <div className="font-medium text-white text-lg mr-14">
                Build on Cosmos
              </div>
              <div className="font-medium text-white text-lg mr-14">
                Community
              </div>
            </div>
            <div className="flex">
              <Link href="/join">
                <a className="get-started-btn font-medium text-white text-sm rounded py-3 px-4">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-24">
          <h1 className="text-white font-bold text-5xl mb-8">
            Connect and Communicate With Others
          </h1>
          <h1 className="okk text-white font-bold text-5xl mb-8">
            Without Any Privacy
          </h1>
        </div>
        <div className="text-white mb-4">One API to build personalized:</div>
        <ul className="list-none">
          <li className="flex items-center text-white mb-4">
            <Checkmark /> <span className="pl-2">No Tracking</span>
          </li>
          <li className="flex items-center text-white mb-4">
            <Checkmark />
            <span className="pl-2">No need email or phone number</span>
          </li>
          <li className="flex items-center text-white mb-4">
            <Checkmark />
            <span className="pl-2">No last seen or or any seen notice</span>
          </li>
          <li className="flex items-center text-white mb-4">
            <Checkmark />
            <span className="pl-2">Create account with Ethereum or Solana</span>
          </li>
        </ul>
      </div>
    </header>
    <style jsx>
      {`
        .promotion {
          background: #041243;
        }
        .promotion-btn {
          background: #25336f;
        }
        .get-started-btn {
          background: #6ad9ea;
          color: #16205a;
        }
        header {
          background: -webkit-linear-gradient(-90deg, #192659, #041037);
        }
        .okk {
          background: -webkit-linear-gradient(360deg, #ed9467, #6bd8e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}
    </style>
  </>
);

export default IndexHeader;
