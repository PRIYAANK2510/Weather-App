import { useState } from 'react';
import Home from './pages/Home';
function App() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : false
	);
	const handleDarkMode = () => {
		const temp = darkMode ? false : true;
		setDarkMode(temp);
		localStorage.setItem('dark', temp);
	};
	return (
		<div className={`min-h-screen flex flex-col ${darkMode ? 'App dark' : 'App'}`}>
			<Home
				darkMode={darkMode}
				handleDarkMode={handleDarkMode}
			/>
		</div>
	);
}
export default App;
