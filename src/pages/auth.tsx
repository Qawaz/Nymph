import { motion } from "framer-motion";
import React, { createContext, useState } from "react";
import CreatingAccountPhases from "@/components/creatingAccountPhases";
import BaseLayout from "@/components/layouts/baseLayout";

const Auth = () => (
  <BaseLayout>
    <motion.div
      className="flex justify-center items-center h-full w-full overflow-hidden py-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0 }}
    >
      <div className="relative w-full h-full">
        <CreatingAccountPhases />
      </div>
    </motion.div>
  </BaseLayout>
);

export default Auth;
