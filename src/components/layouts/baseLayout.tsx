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
    </>
  );
};

export default BaseLayout;
