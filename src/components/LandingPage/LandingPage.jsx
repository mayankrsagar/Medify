import React from 'react';

import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';

import ambulance from '../../assets/Ambulance.png';
import newsBlog from '../../assets/blog and news.png';
import medicalStore from '../../assets/Capsule.png';
import listOfDoctor from '../../assets/Carousel/list of doctor.png';
import doctors from '../../assets/doctor face.png';
import doctor from '../../assets/Doctor.png';
import labs from '../../assets/Drugstore.png';
import hospital from '../../assets/Hospital.png';
import qanda from '../../assets/q&a banner.png';
import special from '../../assets/speclization.png';
import Discount from '../Discount/Discount';
import Search from '../Search/Search';

const services = [
  { name: 'Doctors', img: doctor },
  { name: 'Labs', img: labs },
  { name: 'Hospitals', img: hospital },
  { name: 'Medical Store', img: medicalStore },
  { name: 'Ambulance', img: ambulance },
];

const LandingPage = () => {
  return (
    <React.Fragment>
      <Box sx={{ padding: '3rem' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" gutterBottom>
                Skip the travel! Find Online
              </Typography>
              <Typography variant="h3" gutterBottom>
                Medical <span style={{ color: '#2AA7FF' }}>Centers</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: '177px', height: '48px' }}
              >
                Find Centers
              </Button>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={doctors}
                alt="Doctor"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  maxWidth:"400px",
                  height:"auto"
                  // maxWidth: '643px',
                  // height:"100%",
                  // maxHeight:"735.94px"
                }}
              />
            </Box>
          </Grid>
        </Grid>
        {/*  Search Component */}
        <Box sx={{boxShadow: "6px 6px 35px 0px #1028511C", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Search searchIcon/>
        <Grid container spacing={2} mt={4}>
                
        {services.map((service, index) => (
  <Box key={index} sx={{width:"203px", height:"153px", display:"flex", justifyContent:"center", alignItems:"center", margin:"auto" , backgroundColor:"#FAFBFE"}}>
    <Box textAlign="center">
      <img src={service.img} alt={service.name} width="100" />
      <Typography variant="h6">{service.name}</Typography>
    </Box>
  </Box>
))}
      </Grid>
      </Box>
      </Box>
      <Box>
        <Discount />
      </Box>
      <img src={special} alt="" style={{width:"100%"}} />
      <img src={listOfDoctor} alt="" style={{width:"100%"}} />
      <img src={newsBlog} alt="" style={{width:"100%"}} />
      <img src={qanda} alt="" style={{width:"100%"}} />
    </React.Fragment>
  );
};

export default LandingPage;
