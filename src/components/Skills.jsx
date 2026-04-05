// import React from "react";
// import {
//   Container,
//   Grid,
//   Card,
//   Typography,
//   Chip,
//   Stack,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import data from "../data";

// export default function Skills() {
//   const categories = Object.entries(data.skills);

//   return (
//     <Container id="skills" sx={{ py: 10, maxWidth: "1100px" }}>
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: "center",
//           fontWeight: 700,
//           background: "linear-gradient(90deg,#4F46E5,#EC4899)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           mb: 5,
//         }}
//       >
//         My Skills
//       </Typography>

//       <Grid container spacing={4}>
//         {categories.map(([category, items]) => (
//           <Grid item xs={12} md={6} key={category}>
//             <Card
//               component={motion.div}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               sx={{
//                 p: 4,
//                 borderRadius: "20px",
//                 boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.1)",
//                 background: "rgba(255, 255, 255, 0.85)",
//                 backdropFilter: "blur(10px)",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: 600,
//                   color: "primary.main",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {category}
//               </Typography>
//               <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
//                 {items.map((skill, i) => (
//                   <Chip
//                     key={i}
//                     label={skill}
//                     color="primary"
//                     variant="outlined"
//                     sx={{
//                       fontWeight: 600,
//                       borderRadius: "8px",
//                       px: 1,
//                     }}
//                   />
//                 ))}
//               </Stack>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

import React from "react";
import { Container, Typography, Card, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { skills } from "../data";

export default function Skills() {
  return (
    <Container id="skills" sx={{ py: 10, maxWidth: "1100px" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          background: "linear-gradient(90deg,#4F46E5,#EC4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 5,
        }}
      >
        My Skills
      </Typography>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={6} // Default for large screens
        centeredSlides={false} // ✅ Avoids forced centering
        loop={true} // ✅ Infinite scrolling
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        style={{ padding: "10px 0" }}
      >
        {skills.map((skill, i) => (
          <SwiperSlide
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              sx={{
                p: 3,
                borderRadius: "18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                spaceBetween: 2,
                justifyContent: "center",
                boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.1)",
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(10px)",
                cursor: "pointer",
                height: "140px",
                width: "100px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 25px rgba(79,70,229,0.3)",
                },
              }}
            >
              <Box
                component="img"
                src={skill.logo}
                alt={skill.name}
                sx={{
                  width: 64,
                  height: 64,
                  objectFit: "contain",
                  mb: 2,
                  filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.15))",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontSize: "1rem",
                }}
              >
                {skill.name}
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
