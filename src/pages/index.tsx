import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "@/redux/appHooks";
import Button from "@/components/elements/button";
import BaseLayout from "@/components/layouts/baseLayout";
import { increment } from "@/redux/features/counter/counterSlice";

const Index = () => {
  const router = useRouter();

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <BaseLayout>
      <main className="w-full h-full flex flex-col items-center py-16">
        <motion.div
          className="max-w-screen-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0 }}
        >
          <header className="mb-64">
            <div className="mt-48">
              <h1 className="text-white font-bold text-7xl text-center mb-8">
                Everything Here Is {count} Secret
              </h1>
              <h1
                className="text-white text-center text-7xl font-bold"
                onClick={() => {
                  console.warn(count);
                  dispatch(increment());
                }}
              >
                We Never Leak Secrets
              </h1>
              <div className="flex justify-center mt-16">
                <Button
                  style={{
                    background: "#01ffb9",
                    paddingTop: 15,
                    paddingBottom: 15,
                  }}
                  onClick={() => router.push("/auth")}
                >
                  Join Community
                </Button>
              </div>
            </div>
          </header>
          <section className="grid grid-cols-3 gap-12 mb-10">
            <div
              className="rounded-xl py-8 px-10"
              style={{ backgroundColor: "#242569" }}
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                Block Storage
              </h3>
              <p className="text-gray-300 text-sm leading-7 mb-8">
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month,
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month,
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month
              </p>
              <p className="text-base" style={{ color: "#00d7d3" }}>
                Learn more
              </p>
            </div>
            <div
              className="rounded-xl py-8 px-10"
              style={{ backgroundColor: "#242569" }}
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                Load Balancer
              </h3>
              <p className="text-gray-300 text-sm leading-7 mb-8">
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month,
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month,
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month
              </p>
              <a className="text-base" style={{ color: "#00d7d3" }}>
                Learn more
              </a>
            </div>
            <div
              className="rounded-xl py-8 px-10"
              style={{ backgroundColor: "#242569" }}
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                Floating IPs
              </h3>
              <p className="text-gray-300 text-sm leading-7 mb-8">
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month,
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month,
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month
              </p>
              <p className="text-base" style={{ color: "#00d7d3" }}>
                Learn more
              </p>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-12">
            <div
              className="rounded-xl py-8 px-10"
              style={{ backgroundColor: "#242569" }}
            >
              <h3 className="text-white text-2xl font-bold mb-4">Spaces</h3>
              <p className="text-gray-300 text-sm leading-7 mb-8">
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month,
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month,
                Add more storage to your Droplet or mix-and-match compute and
                storage to suit your needs, add 0.10$ per gigabyte per month
              </p>
              <p className="text-base" style={{ color: "#00d7d3" }}>
                Learn more
              </p>
            </div>
          </section>
        </motion.div>
      </main>
    </BaseLayout>
  );
};

export default Index;
