export default function ButtonCustom({ onClick, text}) {
  return (
    <button
      type="button"
      className="flex justify-center self-center mt-2 md:text-lg w-1/4 text-white bg-primary hover:bg-{secondary} rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}