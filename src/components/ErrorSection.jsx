import Lottie from 'lottie-react';
import ErrorAnimation from '../animations/error-animation.json';

const ErrorSection = ({ fetchError }) => {
  const lottieStyles = {
    height: 250,
    width: 250,
  };
  return (
    <div className='p-6 w-9/10 lg:w-2/3 flex flex-col justify-center items-center gap-3 text-center rounded-xl border-dotted border-4 border-gray-400 dark:border-gray-800 dark:text-gray-200 '>
      <Lottie
        animationData={ErrorAnimation}
        loop={true}
        style={lottieStyles}
      />
      <h2 className='font-bold text-lg uppercase text-red-700 dark:text-red-400'>
        Not Found
      </h2>
      <p className='text-center'>{fetchError}</p>
    </div>
  );
};
export default ErrorSection;
