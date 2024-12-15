import {
  useContext,
  useState,
} from 'react';

import { useSnackbar } from 'notistack';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';

import verifiedMedical from '../../assets/verifiedHospitalBadge.png';
import { AppContext } from '../Context/AppProvider';
import TimeSelection from '../TimeSelection/TimeSelection';

const HospitalCard = ({ data }) => {
  const [openSlot, setOpenSlot] = useState(false);
  const { myBooking, setMyBooking } = useContext(AppContext);
  const [timeSlot, setTimeSlot] = useState({ date: "", time: "" });
  const { enqueueSnackbar } = useSnackbar();

  const handleSlot = () => {
    setOpenSlot((prev) => !prev);
  };

const formatDate=(date)=>{
const year=new Date().getFullYear();
const [dayName, month, day]=date.split(",")
const formatedDate=new Date(`${day} ${month} ${year}`);
return new Intl.DateTimeFormat("en-in",{
  day: "numeric",
  year:"numeric",
  month: "long",
}).format(formatedDate);
}
  
  const addHospital = () => {
    if (timeSlot.date === "" || timeSlot.time === "") {
      enqueueSnackbar("Select a date and time first.", { variant: "warning" });
      return;
    }
    
    if(timeSlot.date ==="Today"){
      console.log(timeSlot.date)
      const todayDate=new Date();
      timeSlot.date=new Intl.DateTimeFormat("en-in",{
        day: "numeric",
        year:"numeric",
        month: "long",
      }).format(todayDate)
      console.log(timeSlot.date)
    }else if(timeSlot.date==="Tomorrow"){
      console.log(timeSlot.date)
      const todayDate=new Date();
      todayDate.setDate(todayDate.getDate() + 1);
      timeSlot.date=new Intl.DateTimeFormat("en-in",{
        day: "numeric",
        year:"numeric",
        month: "long",
      }).format(todayDate);
      console.log(timeSlot.date)
    }else{
      timeSlot.date=formatDate(timeSlot.date);
    }
    
    const newBooking = { ...data, ...timeSlot };
    const updatedBookings = [...myBooking, newBooking];
    setMyBooking(updatedBookings);

    localStorage.setItem("myBookings", JSON.stringify(updatedBookings));
    enqueueSnackbar("Successfully booked the slot!", { variant: "success" });
  };

  return (
    <Box sx={{ maxWidth: "785px", width: "100%", margin: "1rem" }}>
      <Card>
        <CardActionArea onClick={handleSlot}>
          <CardContent sx={{ display: "flex" }}>
            {/* Left Section */}
            <Box display={"flex"}>
              <Box
                component="img"
                width={"9rem"}
                height={"9rem"}
                src={verifiedMedical}
                alt="Verified Medical logo"
              />
              <Box>
                <Typography variant="h5">{data["Hospital Name"]}</Typography>
                <Typography variant="body1">{`${data.City} ${data.State}`}</Typography>
                <Typography variant="body1" textAlign={"center"}>
                  Smilescence Center for Advanced Dentistry + 1 more
                </Typography>
                <Typography variant="body1">
                  FREE <Typography variant='span' sx={{textDecoration:"line-through", color:"#02A401"}}>₹500 </Typography> Consultation fee at clinic
                </Typography>
                <hr />
                <Typography
                  sx={{
                    background: "#00A500",
                    display: "flex",
                    width: "fit-content",
                    padding: "4px",
                    borderRadius: "3.5px",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <ThumbUpOffAltIcon />
                  {data["Hospital overall rating"]}
                </Typography>
              </Box>
            </Box>

            {/* Right Section */}
            <Box display={"flex"} flexDirection={"column-reverse"} width={212}>
              <Button
                variant="contained"
                onClick={addHospital}
              >
                Book FREE Center Visit
              </Button>
              <Typography variant="body1" color='#02A401'>Available Today</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box>
        {openSlot && <TimeSelection setTimeSlot={setTimeSlot} />}
      </Box>
    </Box>
  );
};

export default HospitalCard;
