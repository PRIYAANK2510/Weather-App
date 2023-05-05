import DateTempSection from './DateTempSection';
import DetailWeather from './DetailWeather';
import HourlyTempSection from './HourlyTempSection';
import MainTemp from './MainTemp';

const OutputSection = ({
  data,
  dateData,
  isFahrenheit,
  nowDate,
  setNowDate,
}) => {
  return (
    <div className='mt-3 w-9/10 lg:w-2/3 flex flex-col gap-4 dark:border-gray-800 dark:text-gray-200 '>
      <MainTemp
        currentConditions={dateData}
        isFahrenheit={isFahrenheit}
      />
      <div className='mb-4'>
        <h6 className='italic text-lg opacity-70'>
          <span className='capitalize'>{data.resolvedAddress}</span>
        </h6>
      </div>
      <h1 className='text-lg'>Weather Details</h1>
      <DetailWeather
        currentConditions={dateData}
        isFahrenheit={isFahrenheit}
      />
      <h1 className='text-lg'>Hourly Weather</h1>
      <HourlyTempSection hourlyTemp={dateData.hours} />
      <h1 className='text-lg'>Daily Weather</h1>
      <DateTempSection
        dateTemp={data.days}
        nowDate={nowDate}
        setNowDate={setNowDate}
      />
    </div>
  );
};
export default OutputSection;
