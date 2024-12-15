import React from 'react';

import { ThumbUp } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

import verifiedBadge from '../../assets/verifiedHospitalBadge.png';

const BookedSlotCard = ({ data }) => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", padding: "16px", margin:"1rem"}}>
      <Box sx={{ mr: 2 }}>
        <img 
          src={verifiedBadge} 
          alt="Hospital badge" 
          style={{ width: "140px", height: "140px", objectFit: "contain" }} 
        />
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {data["Hospital Name"]}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {data["City"]} {data["State"]}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          Smilescence Center for Advanced Dentistry + 1 more
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ThumbUp />}
          sx={{ mt: 1, padding: "6px 12px" }}
        >
          {data["Hospital overall rating"]}
        </Button>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ml: "auto",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {data["time"]}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {data["date"]}
        </Typography>
      </Box>
    </Card>
  );
};

export default BookedSlotCard;
