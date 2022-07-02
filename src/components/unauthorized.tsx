import Link from "next/link";
import { Button } from "./elements";
import UnauthorizedIcon from "./icons/unathorized";
import BaseLayout from "./layouts/baseLayout";

const Unauthorized = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center py-40">
        <UnauthorizedIcon />
        <div className="text-gray-300 text-lg py-16">
          No authorization found, this page is not publically, to access it
          please login first.
        </div>
        <Link href="/" passHref>
          <Button extraClasses="flex items-center border border-yellow-accent px-6">
            Back to Home
          </Button>
        </Link>
      </div>
    </BaseLayout>
  );
};

export default Unauthorized;
