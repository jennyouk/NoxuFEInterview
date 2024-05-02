type QuestionBtnProps = {
  buttonText: string;
};

export default function QuestionBtn({ buttonText }: QuestionBtnProps) {
  return (
    <button className='border border-slate-300 rounded-md text-sm px-4 py-2 mr-[10px]'>
      {buttonText}
    </button>
  );
}
