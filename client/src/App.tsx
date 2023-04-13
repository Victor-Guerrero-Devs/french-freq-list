import { useState } from 'react';
import InputForm from './components/InputForm';
import FreqTable from './components/FreqTable';
import Spinner from './components/Spinner';

function App() {
  const [frequencyList, setFrequencyList] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setFormSubmitted(true);
    const formData = new FormData(e.currentTarget);
    const response = await fetch('http://127.0.0.1:5000/lemmatize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: formData.get('input-text'),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.result);
      setFrequencyList(data.result);
      setFormSubmitted(false);
    } else {
      const error = await response.text();
      alert(error);
      setFormSubmitted(false);
    }
  };

  return (
    <div className='bg-blue-300 min-h-screen flex flex-col'>
      <header className='my-4'>
        <h1 className='font-extrabold text-transparent text-center text-6xl bg-clip-text bg-gradient-to-r from-gray-500 to-blue-800'>
          French Frequency List
        </h1>
      </header>
      <main className='flex-grow'>
        <InputForm handleSubmit={handleSubmit} />
        {formSubmitted && <Spinner />}
        {frequencyList && <FreqTable lemmas={frequencyList} />}
      </main>
      <footer className='text-center w-full py-4'>
        French Lemma Frequency List Generator 2023
      </footer>
    </div>
  );
}

export default App;
