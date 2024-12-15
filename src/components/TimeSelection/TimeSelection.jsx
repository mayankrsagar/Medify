import 'swiper/css';
import 'swiper/css/navigation';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  A11y,
  Navigation,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';

const TimeSelection = ({ setTimeSlot }) => {
  const [value, setValue] = useState("0"); // TabContext value
  const [selectedTime, setSelectedTime] = useState(""); // Selected time slot

  // Generate dynamic date labels
  const dateLabels = Array.from({ length: 7 }, (_, index) => {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    const date = new Date();
    date.setDate(date.getDate() + index);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);
  });

  // Handle Swiper tab change
  const handleTabChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    setValue(String(activeSlideIndex));
    setTimeSlot((prev) => ({ ...prev, date: dateLabels[activeSlideIndex] }));
    setSelectedTime(""); // Reset time selection when changing tabs
  };

  // Handle Button Click for time slot selection
  const handleTimeSlotClick = (time) => {
    setSelectedTime(time); // Update selected time
    setTimeSlot((prev) => ({ ...prev, time }));
  };

  const handleTabClick = (index) => {
    setValue(String(index));
    setTimeSlot((prev) => ({ ...prev, date: dateLabels[index] }));
    setSelectedTime(""); // Reset time selection when changing tabs
  };

  useEffect(() => {
    setTimeSlot((prev) => ({ ...prev, date: dateLabels[0] }));
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            mb: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            onSlideChange={handleTabChange}
          >
            {dateLabels.map((label, index) => (
              <SwiperSlide key={index}>
                <Button
                  variant={value === String(index) ? "contained" : "standard"}
                  onClick={() => handleTabClick(index)}
                  sx={{
                    width: "100%",
                    padding: "8px",
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: "1rem 2rem",
                  }}
                >
                  {label}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {dateLabels.map((label, index) => (
          <TabPanel key={index} value={String(index)}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {label}
            </Typography>
            <Box display={"flex"} flexDirection={"column"}>
              {/* Morning */}
              <Box display={"flex"} gap={2} mb={2}>
                <Typography>Morning</Typography>
                <Box display={"flex"} gap={3} flexWrap={"wrap"}>
                  <Button
                    variant={selectedTime === "11:30 AM" ? "contained" : "outlined"}
                    onClick={() => handleTimeSlotClick("11:30 AM")}
                  >
                    11:30 AM
                  </Button>
                </Box>
              </Box>

              {/* Afternoon */}
              <Box display={"flex"} gap={2} mb={2}>
                <Typography>Afternoon</Typography>
                <Box display={"flex"} gap={3} flexWrap={"wrap"}>
                  {["12:00 PM", "12:30 PM", "1:30 PM", "2:00 PM", "2:30 PM"].map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "contained" : "outlined"}
                      onClick={() => handleTimeSlotClick(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* Evening */}
              <Box display={"flex"} gap={2}>
                <Typography>Evening</Typography>
                <Box display={"flex"} gap={3} flexWrap={"wrap"}>
                  {["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"].map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "contained" : "outlined"}
                      onClick={() => handleTimeSlotClick(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default TimeSelection;
