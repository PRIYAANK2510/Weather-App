import { useEffect, useRef, useState } from 'react';
import ErrorSection from '../components/ErrorSection';
import Header from '../components/Header';
import LoadingSection from '../components/LoadingSection';
import OutputSection from '../components/OutputSection';
import SearchBox from '../components/SearchBox';
import StartSection from '../components/StartSection';
const Home = ({ darkMode, handleDarkMode }) => {
  const [searchText, setSearchText] = useState('');
  const [word, setWord] = useState(null);
  const [data, setData] = useState({});
  const [nowDate, setNowDate] = useState({ current: '' });

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFahrenheit, setIsFahrenheit] = useState(
    localStorage.getItem('isFahrenheit')
      ? JSON.parse(localStorage.getItem('isFahrenheit'))
      : false
  );
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSearch = (e) => {
    e.preventDefault();
    setWord(searchText);
    setSearchText('');
  };
  const handleHome = () => {
    setSearchText('');
    setWord(null);
    setData({});
    setFetchError(null);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async (word) => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${API_URL}${word}?unitGroup=${
            isFahrenheit ? 'us' : 'metric'
          }&include=hours%2Cdays%2Ccurrent&key=${API_KEY}&contentType=json`
        );
        if (response.status === 429) throw Error('Search Limit Exceed');
        if (!response.ok)
          throw Error(
            "Sorry pal, we couldn't find the location you were looking for."
          );
        const val = await response.json();
        setNowDate({ current: val.days[0].datetime });
        setData(val);
        console.log(val);

        setFetchError(null);
        setIsLoading(false);
      } catch (err) {
        setFetchError(err.message);
        setIsLoading(false);
      }
    };
    if (word !== null) fetchData(word);
  }, [word, isFahrenheit]);
  return (
    <>
      <Header
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
        handleHome={handleHome}
        isFahrenheit={isFahrenheit}
        setIsFahrenheit={setIsFahrenheit}
      />
      <main className='bg-gray-200 dark:bg-slate-600 flex-auto flex flex-col py-6 items-center'>
        <SearchBox
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />
        {isLoading && <LoadingSection />}
        {!isLoading && fetchError && <ErrorSection fetchError={fetchError} />}
        {!isLoading && !fetchError && Object.keys(data).length === 0 && (
          <StartSection />
        )}
        {!isLoading && !fetchError && Object.keys(data).length !== 0 && (
          <OutputSection
            data={data}
            dateData={
              data.days.filter((day) => day.datetime === nowDate.current)[0]
            }
            nowDate={nowDate}
            setNowDate={setNowDate}
            isFahrenheit={isFahrenheit}
          />
        )}
      </main>
    </>
  );
};
export default Home;
