import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import IndexHeader from "@/components/index/header.index";
import NoTrackingSection from "@/components/index/noTracking.index";
import RegisterWithWalletSection from "@/components/index/registerWithWallet.index";
import BlogsSection from "@/components/index/blogs.index";
import BaseLayout from "@/components/layouts/baseLayout";

const Index = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return (
    <BaseLayout>
      <IndexHeader />
      <NoTrackingSection />
      <RegisterWithWalletSection />
      <BlogsSection />
    </BaseLayout>
  );
};

export default Index;
