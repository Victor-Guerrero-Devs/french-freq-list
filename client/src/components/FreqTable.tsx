type LemmasProp = {
  frequency: string;
  lemma: string;
  pos: string;
  rank: string;
}[];

const FreqTable = ({ lemmas }: { lemmas: LemmasProp }) => {
  return (
    <div className='flex justify-center my-4'>
      <table className='table-auto w-3/4 border-collapse border border-gray-400'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2'>Rank</th>
            <th className='px-4 py-2'>Lemma</th>
            <th className='px-4 py-2'>Usage</th>
            <th className='px-4 py-2'>Part of Speech</th>
          </tr>
        </thead>
        <tbody>
          {lemmas.map((lemma, index) => {
            const isEven = index % 2 === 0;

            return (
              <tr
                key={lemma.rank}
                className={`${isEven ? 'bg-gray-300' : 'bg-blue-50'}`}
              >
                <td className='border px-4 py-2'>{lemma.rank}</td>
                <td className='border px-4 py-2'>{lemma.lemma}</td>
                <td className='border px-4 py-2'>{lemma.frequency}</td>
                <td className='border px-4 py-2'>{lemma.pos}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FreqTable;
