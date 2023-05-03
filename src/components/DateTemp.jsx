const DateTemp = ({ temp, icon, date, nowDate, setNowDate }) => {
  const formattedDate = formatDate(date);
  return (
    <div
      className={`dark:bg-gray-800 bg-gray-400 w-[100px] h-[130px] aspect-square rounded-md cursor-pointer ${
        nowDate.current === date ? 'opacity-100' : 'opacity-60'
      }`}
      onClick={() => {
        setNowDate({ current: date });
      }}
    >
      <div className='flex flex-col justify-between items-center gap-1 p-2 h-full'>
        <img
          className='w-9 h-9'
          src={`/icons/${icon}.svg`}
          alt='dailyweather'
        />
        <h2 className='text-slate-800 dark:text-slate-400'>{`${temp}\u00B0`}</h2>
        <h2 className='text-gray-950 dark:text-gray-400 text-md'>
          {formattedDate}
        </h2>
      </div>
    </div>
  );
};
export default DateTemp;
const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-');
  return `${day}-${month}-${year}`;
};
