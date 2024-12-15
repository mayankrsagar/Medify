import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';

import { AppContext } from '../Context/AppProvider';

const Search = ({ searchIcon }) => {
  const [states, setStates] = useState([]);
  const [citys, setCitys] = useState([]);
const navigation=useNavigate();
  const [cityValue, setCityValue] = useState('City');
  const [stateValue, setStateValue] = useState('State');
  const { enqueueSnackbar } = useSnackbar();
  const fetchState = async () => {
    try {
      const response = await axios.get('https://meddata-backend.onrender.com/states');
      setStates(response.data);
    } catch (error) {
      console.error("Can't get States:", error);
    }
  };

  const fetchCity = async () => {
    try {
      const response = await axios.get(`https://meddata-backend.onrender.com/cities/${stateValue}`);
      setCitys(response.data);
    } catch (error) {
      console.error("Can't get Citys:", error);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  useEffect(() => {
    setCityValue('City'); // Reset cityValue when state changes
    if (stateValue !== 'State') {
      fetchCity();
    }
  }, [stateValue]);

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
  };

  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };

const {chosenStateAndCity , setChosenStateAndCity, setMedical} =useContext(AppContext)

const fetchMedicalCenter=async(state,city)=>{
try{
  const response =await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
  setMedical(response.data);
  console.log(response.data);
  
}catch(error){
console.error("cant fetch data of medical: ",error)
}
  
}

const handleSearchData = () => {
  if (stateValue === 'State' || cityValue === 'City') {
    enqueueSnackbar('Please select the state and city first', { variant: 'warning' });
    return;
  }

  // setChosenStateAndCity([stateValue, cityValue]); // Save in context
  fetchMedicalCenter(stateValue, cityValue);

  if (searchIcon) {
    navigation('/findDoctor');
  }
};


// useEffect(() => {
//   if (chosenStateAndCity.length > 0) {
//     setStateValue(chosenStateAndCity[0]);
//     setCityValue(chosenStateAndCity[1]);
//   }
// }, [chosenStateAndCity,]);

  return (
    <React.Fragment>
      <Box display="flex" gap={3} flexWrap="wrap" margin={4}>
        <TextField
        required
          value={stateValue}
          onChange={handleStateChange}
          select
          slotProps={{
            input: {
              startAdornment: (
                <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
              ),
            },
          }}
          sx={{
            '.MuiSelect-icon': { display: 'none' },
            width: '285px',
            height: '50px',
            // '& .MuiInputBase-root': {
            //   paddingLeft: 2,
            // }, 
            backgroundColor:"white",

          }}
        >
          <MenuItem value="State" disabled>
            State
          </MenuItem>
          {states.map((state, index) => (
            <MenuItem key={index} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          value={cityValue}
          onChange={handleCityChange}
          select
          slotProps={{
            input: {
              startAdornment: (
                <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
              ),
            },
          }}
          sx={{
            '.MuiSelect-icon': { display: 'none' },
            width: '285px',
            height: '50px',
            '& .MuiInputBase-root': {
              paddingLeft: 2,
            },
            backgroundColor:"white",
          }}
        >
          <MenuItem value="City" disabled>
            City
          </MenuItem>
          {citys.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          sx={{
            height: '50px',
            minWidth: '120px',
            alignSelf: 'center',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 16px',
          }}
          onClick={handleSearchData}
        >
          <Typography variant="button">Search</Typography>
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Search;
