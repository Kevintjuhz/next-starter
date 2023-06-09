export default function PrimaryButton({ children }) {
  return (
    <button
      type="button"
      className="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 border-violet-600 hover:border-violet-700 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium"
    >
      {children}
    </button>
  );
}
