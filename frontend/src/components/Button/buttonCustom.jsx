export default function buttonCustom({ onClick, text}) {
  return (
    <button
      type="button"
      className="flex justify-center self-center md:text-lg w-2/4 text-white bg-gradient-to-r mt-10 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}