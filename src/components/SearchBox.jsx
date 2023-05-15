import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
const SearchBox = ({ searchText, setSearchText, handleSearch }) => {
	const inputRef = useRef();
	return (
		<form
			className='flex items-center relative w-9/10 lg:w-2/3 mb-6'
			onSubmit={handleSearch}
		>
			<label
				htmlFor='input-word'
				className='hidden'
			>
				Input Country
			</label>
			<input
				autoFocus
				ref={inputRef}
				id='input-word'
				required
				type='text'
				className='flex-grow h-[50px] p-4 pr-10 rounded-xl text-lg focus:border-blue-500 focus:border-[2.5px] focus:outline-none dark:bg-slate-500 dark:text-gray-100 dark:focus:border-blue-900'
				value={searchText}
				placeholder='Enter any City or Country'
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button
				type='submit'
				aria-label='search'
				onClick={() => inputRef.current.focus}
				className='absolute right-0 hover:cursor-pointer w-12 h-12 flex justify-center items-center'
			>
				<BiSearch className='text-blue-500 text-xl dark:text-blue-900' />
			</button>
		</form>
	);
};
export default SearchBox;
