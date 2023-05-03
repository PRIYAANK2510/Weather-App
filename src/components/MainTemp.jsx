const MainTemp = ({ currentConditions, isFahrenheit }) => {
  return (
    <div className='font-semibold flex items-center justify-between mb-2'>
      <div>
        <h1 className='float-left text-7xl'>
          {Math.round(currentConditions.temp * 10) / 10}
        </h1>
        {isFahrenheit ? (
          <span className='text-xl'>&deg;F</span>
        ) : (
          <span className='text-xl'>&deg;C</span>
        )}
      </div>
      <div className='flex flex-col items-center gap-3'>
        <img
          className='w-20 h-20'
          src={`/icons/${currentConditions.icon}.svg`}
          alt='weather'
        />
        <span className='opacity-40 text-sm capitalize'>
          {currentConditions.conditions}
        </span>
      </div>
    </div>
  );
};
export default MainTemp;
