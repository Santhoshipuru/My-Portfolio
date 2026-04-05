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
import trainingLogo from "../assets/training.png"; // <-- Place your training/company logo here

export default function Training() {
  return (
    <Container id="training" sx={{ py: 10, maxWidth: 1100 }}>
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
        My Training
      </Typography>

      {/* Training Card */}
      <Card
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        sx={{
          p: 4,
          display: "flex",
          alignItems: "center",
          gap: 3,
          borderRadius: "20px",
          boxShadow: "0px 10px 35px rgba(79, 70, 229, 0.15)",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 14px 40px rgba(79, 70, 229, 0.25)",
          },
        }}
      >
        {/* Training Logo */}
        <Avatar
          src={trainingLogo}
          alt="Training Logo"
          sx={{
            width: 80,
            height: 80,
            borderRadius: "16px",
            bgcolor: "#fff",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
          }}
        />

        {/* Training Details */}
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {data.training.title}
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ color: "primary.main", mt: 0.5, fontWeight: 600 }}
          >
            {data.training.company} • {data.training.duration}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1.5, maxWidth: 800 }}
          >
            {data.training.desc}
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
