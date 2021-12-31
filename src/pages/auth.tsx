import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useState } from "react";
import CreatingAccountPhases from "@/components/creatingAccountPhases";

export const AuthContext = createContext(null);

const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState({
    phase: "createAccount",
    mnemonic: [],
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

const Auth = () => {
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  return (
    <AuthProvider>
      <motion.div
        className="flex justify-center items-center h-screen w-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0 }}
      >
        <div className="relative w-screen h-screen">
          <AnimatePresence initial={false} custom={direction}>
            <div className="absolute top-0 bottom-0 right-0 left-0">
              <CreatingAccountPhases />
            </div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AuthProvider>
  );
};

export default Auth;
