import { SnackbarProvider } from 'notistack';
import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

import styl from './App.module.css';
import footer from './assets/footer.png';
import medifyAppBanner from './assets/medify app banner.png';
import { AppProvider } from './components/Context/AppProvider';
import Navbar from './components/Navbar/Navbar';
import BookedSlot from './pages/BookedSlot/BookedSlot';
import FindDoctor from './pages/FindDoctor/FindDoctor';
import Home from './pages/Home/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize primary color
    },
    secondary: {
      main: "#dc004e", // Customize secondary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
      <AppProvider>
        <p className={styl.heading}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findDoctor" element={<FindDoctor />} />
          <Route path="/myBookings"element={<BookedSlot/>}/>
        </Routes>
        <img src={medifyAppBanner} alt="" style={{width:"100%"}} />
      <img src={footer} alt=""style={{width:"100%"}}/>
      
      </AppProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
