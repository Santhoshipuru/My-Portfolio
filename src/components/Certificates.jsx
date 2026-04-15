import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Dialog,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import data from "../data";

export default function Certificates() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg("");
  };

  return (
    <Container id="certificates" sx={{ py: 10, maxWidth: 1100 }}>

      {/* Heading */}
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
        Awards & Certifications
      </Typography>

     <Card
  sx={{
    p: 4,
    borderRadius: "20px",
    background: "rgba(235, 235, 235, 0.9)",
    backdropFilter: "blur(12px)",
    boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.10)",

    /* ✅ IMPORTANT FIX */
    display: "flex",
    justifyContent: "center",
  }}
>

  {/* centered wrapper */}
  <Box sx={{ width: "100%", maxWidth: "1000px" }}>

    <Grid container spacing={3} justifyContent="center">

      {data.certifications.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>

          <Box sx={{ textAlign: "center" }}>

            {/* IMAGE */}
            <Box
              component={motion.img}
              src={item.image}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpen(item.image)}
              sx={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0px 6px 18px rgba(0,0,0,0.15)",
              }}
            />

            {/* TITLE */}
            <Typography
              sx={{
                mt: 1,
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "text.primary",
              }}
            >
              {item.title}
            </Typography>

            {/* SUBTITLE */}
            <Typography
              sx={{
                mt: 0.3,
                fontSize: "0.9rem",
                color: "text.secondary",
              }}
            >
              {item.subtitle}
            </Typography>

          </Box>

        </Grid>
      ))}

    </Grid>

  </Box>

</Card>

      {/* FULL IMAGE MODAL */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Box
          component="img"
          src={selectedImg}
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Dialog>

    </Container>
  );
}