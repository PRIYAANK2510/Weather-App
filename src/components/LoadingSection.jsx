import Lottie from 'lottie-react';
import LoadingAnimation from '../animations/loading-animation.json';

const LoadingSection = () => {
	const lottieStyles = {
		height: 250,
		width: 250,
	};
	return (
		<div className='p-6 w-9/10 lg:w-2/3 flex flex-col justify-center items-center gap-3 text-center rounded-xl border-dotted border-4 border-gray-400 dark:border-gray-800 dark:text-gray-200 '>
			<Lottie
				animationData={LoadingAnimation}
				loop={true}
				style={lottieStyles}
			/>
			<h2 className='font-bold text-lg uppercase text-blue-700 dark:text-blue-400'>
				Loading...
			</h2>
			<p className='text-center'>
				Wait! for a little bit It seems you have a slow connection.
			</p>
		</div>
	);
};
export default LoadingSection;
