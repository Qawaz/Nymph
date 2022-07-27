import SocialButton from "@/components/elements/socialButton";
import { AppleIcon, GoogleIcon, MediumIcon } from "@/components/icons";

const SocialSignIn = () => {
  return (
    <>
      <SocialButton extraClasses="mb-6" icon={<GoogleIcon />}>
        Sign in with Google
      </SocialButton>
      <SocialButton extraClasses="mb-6" icon={<AppleIcon />}>
        Sign in with Apple
      </SocialButton>
      <SocialButton icon={<MediumIcon />}>Sign in with Medium</SocialButton>
    </>
  );
};

export default SocialSignIn;
