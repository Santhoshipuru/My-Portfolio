import React from "react";
import {
  Container,
  Card,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { EmojiEvents, Star, WorkspacePremium } from "@mui/icons-material";
import data from "../data";

export default function ExtraCurricular() {
  // Choose icons dynamically based on index for variety
  const icons = [<EmojiEvents />, <Star />, <WorkspacePremium />];

  return (
    <Container id="extracurricular" sx={{ py: 10, maxWidth: 1100 }}>
      {/* Section Heading */}
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
        Extra Curricular Activities
      </Typography>

      {/* Card */}
      <Card
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        sx={{
          p: 4,
          borderRadius: "20px",
          boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.12)",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 14px 40px rgba(79, 70, 229, 0.2)",
          },
        }}
      >
        <Stack spacing={3}>
          {data.extracurricular.map((item, i) => (
            <Box
              key={i}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: "14px",
                background: "rgba(255,255,255,0.65)",
                boxShadow: "0px 4px 15px rgba(79, 70, 229, 0.1)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0px 6px 18px rgba(79, 70, 229, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg,#4F46E5,#EC4899)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 22,
                  boxShadow: "0px 4px 12px rgba(79,70,229,0.3)",
                }}
              >
                {icons[i % icons.length]}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Card>
    </Container>
  );
}
