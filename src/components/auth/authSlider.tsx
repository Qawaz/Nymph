import { AnimatePresence } from "framer-motion";
import Login from "@/components/auth/login/login";
import Register from "@/components/auth/login/register";
import AuthLayout from "@/components/layouts/authLayout";
import { useState } from "react";

type SliderState = "Login" | "Register" | "Forget password";
const AuthSlider = () => {
  const [currentState, setCurrentState] = useState<SliderState>("Login");

  const handleStateChange = (state: SliderState) => {
    setCurrentState(state);
  };

  return (
    <>
      <nav>
        <button onClick={() => handleStateChange("Login")}>Login</button>
        <button onClick={() => handleStateChange("Register")}>Register</button>
        {/*<button onClick={() => handleStateChange("Forget password")}>*/}
        {/*  Forget password*/}
        {/*</button>*/}
      </nav>
      <AuthLayout>
        <AnimatePresence mode="wait">
          {currentState === "Login" && <Login />}
          {currentState === "Register" && <Register />}
          {/*{currentState === "Forget password" && <Login />}*/}
        </AnimatePresence>
      </AuthLayout>
    </>
  );
};

export default AuthSlider;
