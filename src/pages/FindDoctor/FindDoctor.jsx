import React, { useContext } from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';

import qanda from '../../assets/q&a banner.png';
import sideGridData from '../../assets/sideGridData.png';
import { AppContext } from '../../components/Context/AppProvider';
import HospitalCard from '../../components/HospitalCard/HospitalCard';
import Search from '../../components/Search/Search';
import style from './FindDoctor.module.css';

const FindDoctor = () => {
  const { medical } = useContext(AppContext);

  return (
    <React.Fragment>
      <Box className={style.searchHeader}>
        <Search />
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">15 medical centers available in Alaska</Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          <CheckCircleOutlineIcon sx={{ marginRight: 1 }} />
          Book appointments with minimum wait-time & verified doctor details
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Displaying hospital cards */}
        <Grid item xs={8} sm={8} md={8}>
          {medical && medical.length > 0 ? (
            medical.map((hospital) => (
              <HospitalCard key={hospital['Provider ID']} data={hospital} />
            ))
          ) : (
            <Typography>No medical centers available.</Typography>
          )}
        </Grid>

        {/* Displaying image */}
        <Grid item xs={4} sm={4} md={4} >
          <img src={sideGridData} alt="Side Grid" className={style.sideImage} style={{width:"100%",objectFit:"contain"}}/>
        </Grid>
      </Grid>
      <img src={qanda} alt="" style={{width:"100%"}} />
    </React.Fragment>
  );
};

export default FindDoctor;
