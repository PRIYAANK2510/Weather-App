import { useState } from 'react';
import ErrorSection from '../components/ErrorSection';
import Header from '../components/Header';
import LoadingSection from '../components/LoadingSection';
import OutputSection from '../components/OutputSection';
import SearchBox from '../components/SearchBox';
import StartSection from '../components/StartSection';
import useFetch from '../hooks/useFetch';

const Home = ({ darkMode, handleDarkMode }) => {
  const [searchText, setSearchText] = useState('');
  const [word, setWord] = useState(null);

  //Is Fahrenheit or Not
  const [isFahrenheit, setIsFahrenheit] = useState(
    localStorage.getItem('isFahrenheit')
      ? JSON.parse(localStorage.getItem('isFahrenheit'))
      : false
  );

  const {
    data,
    isLoading,
    fetchError,
    nowDate,
    setFetchError,
    setIsLoading,
    setNowDate,
    setData,
  } = useFetch(word, setWord, isFahrenheit);

  //Handle Each Search Location
  const handleSearch = (e) => {
    e.preventDefault();
    setWord(searchText);
    setSearchText('');
  };

  //Handle Weather App Click reach home page
  const handleHome = () => {
    setSearchText('');
    setWord(null);
    setData({});
    setFetchError(null);
    setIsLoading(false);
  };

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
        {!isLoading && !fetchError && Object.keys(data).length === 0 && <StartSection />}
        {!isLoading && !fetchError && Object.keys(data).length !== 0 && (
          <OutputSection
            data={data}
            dateData={data.days.filter((day) => day.datetime === nowDate.current)[0]}
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
