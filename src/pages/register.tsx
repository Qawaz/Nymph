import BaseLayout from "@/components/layouts/baseLayout";
import StickyNavigation from "@/components/stickyNavigation";
import RegisterHeaderForm from "@/components/auth/register/header.register";
import RegisterForm from "@/components/auth/register/form.register";

const Register = () => {
  return (
    <BaseLayout>
      <StickyNavigation />
      <RegisterHeaderForm />
      <div className="grid grid-cols-1 md:grid-cols-3 bg-dark-blur rounded-md mb-24">
        <div className="w-full ml-10">
          <RegisterForm />
        </div>
      </div>
      <div className="text-white text-center text-lg pb-16">
        Forgot Password?
      </div>
      <div className="flex py-10">
        <div className="text-gray-400 text-center">Privacy Policy</div>
        <div className="text-gray-400 text-center ml-auto">
          Copyright @ Nymph 2022
        </div>
      </div>
    </BaseLayout>
  );
};

export default Register;
