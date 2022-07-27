import { ReactNode } from "react";
import StickyNavigation from "../stickyNavigation";

type Props = {
  children: ReactNode;
};

const BaseLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <StickyNavigation />
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
