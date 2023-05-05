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

  //Current Date
  const [nowDate, setNowDate] = useState({ current: '' });

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Is Fahrenheit or Not
  const [isFahrenheit, setIsFahrenheit] = useState(
    localStorage.getItem('isFahrenheit')
      ? JSON.parse(localStorage.getItem('isFahrenheit'))
      : false
  );

  //LocalEnviorment Data Imports
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

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

  //Current Location Name
  const geolocationAPI = navigator.geolocation;
  const LOC_API_URL = 'https://us1.locationiq.com/v1/reverse?';
  const LOC_API_KEY = 'pk.c83e52e6732d403110d9ed49ebd07a68';
  useEffect(() => {
    const geoLocationName = async (lat, lon) => {
      try {
        const res = await fetch(
          `${LOC_API_URL}key=${LOC_API_KEY}&lat=${lat}&lon=${lon}&format=json`
        );
        if (!res.ok) throw Error('Cant find the current location');
        const fdata = await res.json();
        setWord(fdata.display_name);
      } catch (err) {
        setFetchError(err.message);
      }
    };
    if (!geolocationAPI) {
      console.log('No GeoLocation APi');
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          geoLocationName(coords.latitude, coords.longitude);
        },
        (error) => {
          setWord('Delhi');
        }
      );
    }
  }, []);

  //Fetting Weather Data
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
