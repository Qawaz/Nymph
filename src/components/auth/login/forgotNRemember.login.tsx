import Link from "next/link";

const ForgotNRememberLogin = () => (
  <div className="flex">
    <div className="flex-grow">
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
    </div>
    <Link className="text-sm text-gray-700" href="/forget-password">
      Forgot your password?
    </Link>
  </div>
);

export default ForgotNRememberLogin;
