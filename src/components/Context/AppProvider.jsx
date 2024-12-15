import {
  createContext,
  useState,
} from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [medical, setMedical] = useState([]);
  const [chosenStateAndCity, setChosenStateAndCity] = useState([]);
  const [myBooking, setMyBooking] = useState(() => {
    
    return  localStorage.getItem("myBookings") ? JSON.parse(localStorage.getItem("myBookings")) : [];
  });

  return (
    <AppContext.Provider
      value={{
        medical,
        setMedical,
        chosenStateAndCity,
        setChosenStateAndCity,
        myBooking,
        setMyBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
