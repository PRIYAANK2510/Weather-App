import DetailBox from './DetailBox';

const DetailWeather = ({ currentConditions, isFahrenheit }) => {
	const dir = convertWindDirection(currentConditions.winddir);
	return (
		<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
			<DetailBox
				title='Humidity'
				data={`${currentConditions.humidity}%`}
				imgname='humidity'
			/>
			<DetailBox
				title='Visibility'
				data={`${currentConditions.visibility}${isFahrenheit ? 'miles' : 'km'}`}
				imgname='visibility'
			/>
			<DetailBox
				title='Sunrise'
				data={`${currentConditions.sunrise.substr(0, 5)}`}
				imgname='sunrise'
			/>
			<DetailBox
				title='Sunset'
				data={`${currentConditions.sunset.substr(0, 5)}`}
				imgname='sunset'
			/>
			<DetailBox
				title='Air Speed'
				data={`${currentConditions.windspeed}${isFahrenheit ? 'miles/h' : 'km/h'}`}
				imgname='windspeed'
			/>
			<DetailBox
				title='Pressure'
				data={`${currentConditions.pressure}${isFahrenheit ? 'mbar' : 'hPa'}`}
				imgname='pressure'
			/>
			<DetailBox
				title='UV Index'
				data={`${currentConditions.uvindex}`}
				imgname='uvindex'
			/>
			<DetailBox
				title='Direction'
				data={`${dir}`}
				imgname='winddirection'
			/>
			<DetailBox
				title='Rain'
				data={`${currentConditions.precip}${isFahrenheit ? 'inch' : 'mm'}`}
				imgname='precipitation'
			/>
			<DetailBox
				title='Rain Probability'
				data={`${currentConditions.precipprob}%`}
				imgname='precipprobability'
			/>
		</div>
	);
};
const convertWindDirection = (angle) => {
	const directions = [
		'N',
		'N-NE',
		'NE',
		'E-NE',
		'E',
		'E-SE',
		'SE',
		'S-SE',
		'S',
		'S-SW',
		'SW',
		'W-SW',
		'W',
		'W-NW',
		'NW',
		'N-NW',
	];
	const index = Math.round(angle / 22.5);
	return directions[index % 16];
};
export default DetailWeather;
