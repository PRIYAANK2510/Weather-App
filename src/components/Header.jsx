import { BiMoon, BiSun } from 'react-icons/bi';
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri';
const Header = ({
  darkMode,
  handleDarkMode,
  handleHome,
  isFahrenheit,
  setIsFahrenheit,
}) => {
  const handleTempType = () => {
    const temp = isFahrenheit ? false : true;
    setIsFahrenheit(temp);
    localStorage.setItem('isFahrenheit', temp);
  };
  return (
    <header className='flex justify-between items-center p-4 bg-gray-400 dark:bg-gray-800'>
      <h1
        className='text-[1.5rem] font-semibold uppercase dark:text-gray-200 cursor-pointer'
        onClick={handleHome}
      >
        Weather App
      </h1>
      <div className='flex items-center gap-4 justify-between'>
        <button
          onClick={handleTempType}
          className='text-[1.5rem]'
        >
          {isFahrenheit ? (
            <RiCelsiusFill className='text-blue-700' />
          ) : (
            <RiFahrenheitFill className='text-blue-700' />
          )}
        </button>
        <button
          onClick={handleDarkMode}
          className='text-[1.5rem]'
        >
          {darkMode ? (
            <BiSun className='text-yellow-600' />
          ) : (
            <BiMoon className='text-white' />
          )}
        </button>
      </div>
    </header>
  );
};
export default Header;
