import React, { useContext } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import slideGridData from '../../assets/sideGridData.png';
import BookedSlotCard from '../../components/BookedSlotCard/BookedSlotCard';
import { AppContext } from '../../components/Context/AppProvider';

const BookedSlot = () => {
  const { myBooking } = useContext(AppContext);
  return (
    <React.Fragment>
      <Box
        sx={{
          background:
            "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
          marginTop: "2rem",
          height: "110px",
          padding: "1rem", // added padding for better spacing
        }}
      >
        <Typography variant="h3" sx={{ color: "white", marginBottom: "1rem" }}>
          My Bookings
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="outlined-basic"
            label="Search By Hospital"
            variant="filled"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "1rem",
              border: "1px solid transparent",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            sx={{
              height: "50px",
              minWidth: "120px",
              padding: "0 16px",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {/* Left Section  */}
        <Grid item xs={8} md={8}>
          {myBooking.length >0 ? (
            myBooking.map(booking=>(
<BookedSlotCard  key={booking["Provider ID"]} data={booking}/>
            ))
            
          ) : (
            <Typography variant="h4" textAlign={"center"}>
              No Data to Show
            </Typography>
          )}
        </Grid>
        
        {/* Right Section */}
        <Grid item xs={4} md={4} overflow={"hidden"} >
          <img src={slideGridData} alt="" style={{objectFit:"contain", width:"100%"}} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BookedSlot;
