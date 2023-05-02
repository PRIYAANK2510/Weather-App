import DetailWeather from './DetailWeather';
import HourlyTempSection from './HourlyTempSection';
import MainTemp from './MainTemp';

const OutputSection = ({ data, isFahrenheit }) => {
  return (
    <div className='mt-3 w-9/10 lg:w-2/4 flex flex-col gap-4 dark:border-gray-800 dark:text-gray-200 '>
      <MainTemp
        currentConditions={data.currentConditions}
        isFahrenheit={isFahrenheit}
      />
      <div className='mb-4'>
        <h6 className='italic text-lg opacity-70'>
          <span className='capitalize'>{data.address}</span>
          {`  (${data.resolvedAddress})`}
        </h6>
      </div>
      <h1 className='text-lg'>Weather Details</h1>
      <DetailWeather
        currentConditions={data.currentConditions}
        isFahrenheit={isFahrenheit}
      />
      <h1 className='text-lg'>Hourly Weather</h1>
      <HourlyTempSection hourlyTemp={data.days[0].hours} />
    </div>
  );
};
export default OutputSection;
