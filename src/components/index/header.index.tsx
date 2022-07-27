import Link from "next/link";
import { Arrow, Checkmark } from "@/components/elements";

const IndexHeader = (): JSX.Element => (
  <>
    <header>
      <div className="container mx-auto py-10">
        <div className="py-24">
          <h1 className="font-urbanist text-white font-bold text-7xl mb-8">
            Connect and Communicate
          </h1>
          <h1 className="okk font-urbanist text-white font-bold text-7xl mb-8">
            Without Any Privacy
          </h1>
        </div>
        <div className="text-white mb-4">One API to build personalized:</div>
        <ul className="list-none mb-12">
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
        <Link href="/register">
          <a className="items-center inline-flex justify-center align-middle bg-yellow-accent font-medium text-black text-sm rounded py-3 px-4">
            <span className="pr-3">Get Started</span> <Arrow />
          </a>
        </Link>
      </div>
    </header>
    <style jsx>
      {`
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
