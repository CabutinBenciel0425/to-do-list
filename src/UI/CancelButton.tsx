type CancelButtonProps = {
  onClick?: () => void;
};

function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <div
      className="p-2 bg-transparent cursor-pointer rounded-md active:scale-96 transition-all duration-300 ease w-fit border-2 border-cyan-950 text-cyan-950 font-bold"
      onClick={onClick}
    >
      Cancel
    </div>
  );
}

export default CancelButton;
