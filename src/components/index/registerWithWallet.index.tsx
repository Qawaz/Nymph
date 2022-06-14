import { FunctionComponent } from "react";

const RegisterWithWalletSection: FunctionComponent = (): JSX.Element => (
  <>
    <section>
      <div className="container grid grid-cols-2 py-20 mx-auto">
        <div>
          <h1 className="font-urbanist text-white font-bold text-4xl mb-4">
            Register with Ethereum & Solana
          </h1>
          <h2 className="font-urbanist text-white text-lg mb-8">
            No More Email and Phone Number Required
          </h2>
          <p className="text-white leading-7">
            You will not need to leak your email or phone number to communicate
            with people just with Metamask or Phanmtom wallet you can register,
            also if you prefre you can create account with email and password
            (no phone number required)
          </p>
        </div>
        <div>Solana and ethereum</div>
      </div>
    </section>
  </>
);

export default RegisterWithWalletSection;
