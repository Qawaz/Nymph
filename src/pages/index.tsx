import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useAppSelector, useAppDispatch } from "@/redux/appHooks";
import IndexHeader from "@/components/index/header.index";
import NoTrackingSection from "@/components/index/noTracking.index";
import RegisterWithWalletSection from "@/components/index/registerWithWallet.index";
import BlogsSection from "@/components/index/blogs.index";

const Index = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return (
    <>
      <main>
        <IndexHeader />
        <NoTrackingSection />
        <RegisterWithWalletSection />
        <BlogsSection />
      </main>
      <style jsx>
        {`
          main {
            background-color: rgb(19, 17, 32);
          }
        `}
      </style>
    </>
  );
};

export default Index;
