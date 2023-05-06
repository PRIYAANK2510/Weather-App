import { useEffect, useState } from 'react';

const useFetch = (word, setWord, isFahrenheit) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;
  const LOC_API_URL = import.meta.env.VITE_LOC_API_URL;
  const LOC_API_KEY = import.meta.env.VITE_LOC_API_KEY;

  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const [nowDate, setNowDate] = useState({ current: '' });

  const geolocationAPI = navigator.geolocation;

  useEffect(() => {
    const geoLocationName = async (lat, lon) => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${LOC_API_URL}key=${LOC_API_KEY}&lat=${lat}&lon=${lon}&format=json`
        );
        if (res.status === 429) throw Error('Search Limit Exceed');
        if (!res.ok) throw Error('Cant find the current location');
        const fdata = await res.json();
        setWord(fdata.display_name);
      } catch (err) {
        setFetchError(err.message);
      }
    };
    if (!geolocationAPI) {
      setWord('Delhi');
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
          throw Error("Sorry pal, we couldn't find the location you were looking for.");
        const val = await response.json();
        setNowDate({ current: val.days[0].datetime });
        setData(val);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (word !== null) fetchData(word);
  }, [word, isFahrenheit]);

  return {
    data,
    isLoading,
    fetchError,
    nowDate,
    setFetchError,
    setIsLoading,
    setNowDate,
    setData,
  };
};

export default useFetch;
