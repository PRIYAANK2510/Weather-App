import Lottie from 'lottie-react';
import StartWeather from '../animations/start-weather-animation.json';
const StartSection = () => {
  const lottieStyles = {
    height: 250,
    width: 250,
  };
  return (
    <div className='p-6 w-9/10 lg:w-2/4 flex flex-col justify-center items-center gap-3 text-center rounded-xl border-dotted border-4 border-gray-400 dark:border-gray-800 dark:text-gray-200 '>
      <Lottie
        animationData={StartWeather}
        loop={true}
        style={lottieStyles}
      />
      <h2 className='font-bold text-lg text-blue-700 dark:text-blue-400'>
        Weather App
      </h2>
      <p className='text-center'>
        Hello there ! You can start using this Free Weather App by typing
        anything in the above Search Box.
      </p>
    </div>
  );
};
export default StartSection;
