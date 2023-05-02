const DetailBox = ({ title, data, imgname }) => {
  return (
    <div className='dark:bg-slate-500 bg-white p-3 gap-1 rounded-lg flex items-center justify-between'>
      <div>
        <h1>{title}</h1>
        <p>{data}</p>
      </div>
      <div>
        <img
          className='w-10 h-10'
          src={`/icons/${imgname}.png`}
          alt={imgname}
        />
      </div>
    </div>
  );
};
export default DetailBox;
