import React from "react";
import { Container, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import data from "../data";

export default function About() {
  return (
    <Container id="about" sx={{ py: 10, maxWidth: "1100px" }}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          background: "linear-gradient(90deg,#4F46E5,#EC4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
          textAlign: "center",
        }}
      >
        About Me
      </Typography>

      {/* About Card */}
      <Card
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}  // ✅ Zoom on hover
        whileTap={{ scale: 0.98 }}    // ✅ Slight shrink on click
        sx={{
          p: 5,
          textAlign: "center",
          boxShadow: "0px 12px 40px rgba(79, 70, 229, 0.12)",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(10px)",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 800,
            mx: "auto",
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}
        >
          {data.about}
        </Typography>
      </Card>
    </Container>
  );
}
