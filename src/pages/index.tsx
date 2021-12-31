import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Index = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center py-16">
      <div className="w-full max-w-screen-2xl">
        <div className="flex flex-row items-start">
          <motion.div className="text-white text-lg">Whispers</motion.div>
          <div className="flex flex-row ml-auto">
            <div className="font-inter text-white text-lg mr-14">IBC</div>
            <div className="text-white text-lg mr-14">Build on Cosmos</div>
            <div className="text-white text-lg mr-14">Community</div>
          </div>
        </div>
      </div>
      <motion.div
        className="max-w-screen-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0 }}
      >
        <header className="h-full mb-64">
          <div className="mt-48">
            <h1 className="text-white font-bold text-7xl text-center mb-8">
              Everything Here Is Secret
            </h1>
            <h1 className="text-white text-center text-7xl font-bold">
              We Never Leak Secrets
            </h1>
            <div className="flex justify-center mt-16">
              <button
                className="text-xl text-gray-800 rounded-full px-8 py-4 mr-10"
                style={{ background: "#01ffb9" }}
                onClick={() => router.push("/auth")}
              >
                Join Community
              </button>
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
              storage to suit your needs, add 0.10$ per gigabyte per month, Add
              more storage to your Droplet or mix-and-match compute and storage
              to suit your needs, add 0.10$ per gigabyte per month, Add more
              storage to your Droplet or mix-and-match compute and storage to
              suit your needs, add 0.10$ per gigabyte per month
            </p>
            <a className="text-base" style={{ color: "#00d7d3" }} href="#">
              Learn more
            </a>
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
              storage to suit your needs, add 0.10$ per gigabyte per month, Add
              more storage to your Droplet or mix-and-match compute and storage
              to suit your needs, add 0.10$ per gigabyte per month, Add more
              storage to your Droplet or mix-and-match compute and storage to
              suit your needs, add 0.10$ per gigabyte per month
            </p>
            <a className="text-base" style={{ color: "#00d7d3" }} href="#">
              Learn more
            </a>
          </div>
          <div
            className="rounded-xl py-8 px-10"
            style={{ backgroundColor: "#242569" }}
          >
            <h3 className="text-white text-2xl font-bold mb-4">Floating IPs</h3>
            <p className="text-gray-300 text-sm leading-7 mb-8">
              Add more storage to your Droplet or mix-and-match compute and
              storage to suit your needs, add 0.10$ per gigabyte per month, Add
              more storage to your Droplet or mix-and-match compute and storage
              to suit your needs, add 0.10$ per gigabyte per month, Add more
              storage to your Droplet or mix-and-match compute and storage to
              suit your needs, add 0.10$ per gigabyte per month
            </p>
            <a className="text-base" style={{ color: "#00d7d3" }} href="#">
              Learn more
            </a>
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
              storage to suit your needs, add 0.10$ per gigabyte per month, Add
              more storage to your Droplet or mix-and-match compute and storage
              to suit your needs, add 0.10$ per gigabyte per month, Add more
              storage to your Droplet or mix-and-match compute and storage to
              suit your needs, add 0.10$ per gigabyte per month
            </p>
            <a className="text-base" style={{ color: "#00d7d3" }} href="#">
              Learn more
            </a>
          </div>
        </section>
      </motion.div>
    </main>
  );
};

export default Index;
