import HourTemp from './HourTemp';

const HourlyTempSection = ({ hourlyTemp }) => {
	return (
		<div className='flex gap-4 overflow-x-auto'>
			{hourlyTemp.map((obj, index) => (
				<HourTemp
					key={index}
					temp={obj.temp}
					icon={obj.icon}
					time={obj.datetime}
				/>
			))}
		</div>
	);
};
export default HourlyTempSection;
