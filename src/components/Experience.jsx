// import React from "react";
// import { Container, Grid, Card, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import data from "../data";

// export default function Experience() {
//   return (
//     <Container id="experience" sx={{ py: 10, maxWidth: "1100px" }}>
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
//         Work Experience
//       </Typography>

//       <Grid container spacing={4}>
//         {data.experience.map((exp, i) => (
//           <Grid item xs={12} md={6} key={i}>
//             <Card
//               component={motion.div}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               sx={{
//                 p: 4,
//                 borderRadius: "20px",
//                 boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.1)",
//                 background: "rgba(255, 255, 255, 0.9)",
//               }}
//             >
//               <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                 {exp.role}
//               </Typography>
//               <Typography variant="subtitle2" color="primary" sx={{ mt: 0.5 }}>
//                 {exp.org} • {exp.period}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ mt: 1.5 }}
//               >
//                 {exp.desc}
//               </Typography>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }


import React from "react";
import {
  Container,
  Card,
  Typography,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import data from "../data";
import experience from "../assets/experience.jpg"; // <-- Add a placeholder logo

export default function Experience() {
  return (
    <Container id="experience" sx={{ py: 10, maxWidth: "1100px" }}>
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
        Work Experience
      </Typography>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {data.experience.map((exp, i) => (
          <Card
            key={i}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 3,
              p: 4,
              borderRadius: "18px",
              boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.1)",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 14px 40px rgba(79, 70, 229, 0.25)",
                transform: "translateY(-4px)",
              },
            }}
          >
            {/* Left Side Logo */}
            <Avatar
              src={exp.logo || experience}
              alt={exp.org}
              sx={{
                width: 70,
                height: 70,
                bgcolor: "#fff",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                borderRadius: "12px",
              }}
            />

            {/* Right Side Content */}
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "text.primary" }}
                >
                  {exp.role}
                </Typography>
              </Stack>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "primary.main",
                  mt: 0.5,
                  fontWeight: 600,
                }}
              >
                {exp.org} • {exp.period}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 1.5, maxWidth: 800 }}
              >
                {exp.desc}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
