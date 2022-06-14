import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BaseLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <main className="flex justify-center">
        <div className="container">{children}</div>
      </main>
      <style jsx>
        {`
          main {
            background-color: #131417;
          }
        `}
      </style>
    </>
  );
};

export default BaseLayout;
