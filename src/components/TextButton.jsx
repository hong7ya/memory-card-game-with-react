/* eslint-disable react/prop-types */
function TextButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm text-orange-400 font-bold border border-orange-300 p-[10px] rounded hover:bg-orange-50/50 max-w-[480px]"
    >
      {text}
    </button>
  );
}

export default TextButton;
