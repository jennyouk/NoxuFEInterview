type QuestionBtnProps = {
  buttonText: string;
  onClick: () => void;
};

export default function QuestionBtn({ buttonText, onClick }: QuestionBtnProps) {
  return (
    <button onClick={onClick} className='border border-slate-300 rounded-md text-sm px-4 py-2 mr-[10px]'>
      {buttonText}
    </button>
  );
}
