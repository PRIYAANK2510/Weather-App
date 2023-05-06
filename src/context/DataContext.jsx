import { createContext, useEffect, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : false
  );
  const handleDarkMode = () => {
    const temp = darkMode ? false : true;
    setDarkMode(temp);
    localStorage.setItem('dark', temp);
  };
  return (
    <DataContext.Provider
      value={{
        darkMode,
        setDarkMode,
        handleDarkMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
