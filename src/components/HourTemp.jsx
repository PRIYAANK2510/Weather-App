const HourTemp = ({ temp, icon, time }) => {
  return (
    <div className='dark:bg-gray-700 bg-gray-400 w-[100px] h-[100px] aspect-square rounded-md opacity-80 '>
      <div className='flex flex-col justify-between items-center p-2 h-full'>
        <img
          className='w-9 h-9'
          src={`/icons/${icon}.svg`}
          alt='hourweather'
        />
        <h2 className='text-slate-800 dark:text-slate-400'>{`${temp}\u00B0`}</h2>
        <h2 className='text-gray-950 dark:text-gray-200'>
          {time.substr(0, 5)}
        </h2>
      </div>
    </div>
  );
};
export default HourTemp;
