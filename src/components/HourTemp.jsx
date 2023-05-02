const HourTemp = ({ temp, icon, time }) => {
  return (
    <div className='dark:bg-gray-800 bg-gray-400 w-[100px] h-[100px] aspect-square rounded-md opacity-80 '>
      <div className='flex flex-col justify-between items-center p-2 h-full'>
        <img
          className='w-8 h-8'
          src={`/icons/${icon}.svg`}
          alt='hourweather'
        />
        <h2>{`${temp}\u00B0`}</h2>
        <h2>{time.substr(0, 5)}</h2>
      </div>
    </div>
  );
};
export default HourTemp;
