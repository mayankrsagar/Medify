import React from 'react';

import { Link } from 'react-router-dom';

import {
  MenuItem,
  Typography,
} from '@mui/material';

const MenuBar = ({handleCloseNavMenu}) => {
  return (
    <React.Fragment>
      <MenuItem onClick={handleCloseNavMenu}>
       <Link to="/findDoctor" style={{ textDecoration: 'none', color:"inherit" }}><Typography sx={{ textAlign: "center" }}>Find Doctors</Typography></Link> 
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography sx={{ textAlign: "center" }}>Hospitals</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography sx={{ textAlign: "center" }}>Medicines</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography sx={{ textAlign: "center" }}>Surgeries</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography sx={{ textAlign: "center" }}>
          Software for Provider
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography sx={{ textAlign: "center" }}>Facilities</Typography>
      </MenuItem>
    </React.Fragment>
  );
};

export default MenuBar;
