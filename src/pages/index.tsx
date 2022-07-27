import IndexHeader from "@/components/index/header.index";
import NoTrackingSection from "@/components/index/noTracking.index";
import RegisterWithWalletSection from "@/components/index/registerWithWallet.index";
import BlogsSection from "@/components/index/blogs.index";
import BaseLayout from "@/components/layouts/baseLayout";

const Index = () => (
  <BaseLayout>
    <IndexHeader />
    <NoTrackingSection />
    <RegisterWithWalletSection />
    <BlogsSection />
  </BaseLayout>
);

export default Index;
