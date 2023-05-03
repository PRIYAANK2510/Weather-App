import DateTemp from './DateTemp';
const DateTempSection = ({ dateTemp, nowDate, setNowDate }) => {
  return (
    <div className='flex gap-4 overflow-x-auto'>
      {dateTemp.map((obj, index) => (
        <DateTemp
          key={index}
          temp={obj.temp}
          icon={obj.icon}
          date={obj.datetime}
          nowDate={nowDate}
          setNowDate={setNowDate}
        />
      ))}
    </div>
  );
};
export default DateTempSection;
