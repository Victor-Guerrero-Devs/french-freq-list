type InputProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};
const InputForm = ({ handleSubmit }: InputProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      method='post'
      className='flex flex-col gap-2 justify-center items-center'
    >
      <textarea
        name='input-text'
        id=''
        cols={30}
        rows={10}
        className='overflow-scroll p-2'
      ></textarea>
      <br />
      <button
        className='bg-amber-400 text-gray-700 hover:bg-amber-200 font-bold py-2 px-4 rounded'
        type='submit'
      >
        Generate Frequency List
      </button>
    </form>
  );
};

export default InputForm;
