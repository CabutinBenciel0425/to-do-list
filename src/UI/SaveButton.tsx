function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="p-2 bg-cyan-950 cursor-pointer rounded-md active:scale-96 transition-all duration-300 ease w-fit border-2 font-bold border-cyan-950 text-white"
      onClick={onClick}
    >
      Confirm
    </div>
  );
}

export default SaveButton;
