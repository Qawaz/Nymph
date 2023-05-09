const NavItem = ({ title, icon }) => (
  <button
    type="button"
    className="relative inline-flex items-center w-full px-4 py-4 text-gray-800 text-sm font-medium hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
  >
    {icon}
    {title}
  </button>
);

export default NavItem;
