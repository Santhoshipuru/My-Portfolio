import React from "react";
import {
  Container,
  Card,
  Typography,
  Chip,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import data from "../data";

export default function Education() {
  return (
    <Box
      sx={{
        width: "100%", py: 10,
      }}
    >
      <Container id="education" sx={{ maxWidth: 1100 }}>
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
          Education
        </Typography>

        {/* Education Card */}
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
            boxShadow: "0px 10px 35px rgba(79, 70, 229, 0.15)",
            background: "rgba(255, 255, 255, 0.8)", // Glassmorphism on light theme
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 14px 45px rgba(79, 70, 229, 0.3)",
              transform: "translateY(-6px)",
            },
          }}
        >
          {/* Degree */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#1E293B",
            }}
          >
            {data.education.degree}
          </Typography>

          {/* School */}
          <Typography
            variant="subtitle2"
            sx={{
              color: "#4F46E5",
              mt: 0.5,
              fontWeight: 600,
            }}
          >
            {data.education.school}
          </Typography>

          {/* Period + CGPA */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            {data.education.period} •{" "}
            <strong style={{ color: "#EC4899" }}>
              CGPA: {data.education.cgpa}
            </strong>
          </Typography>

          {/* Divider */}
          <Divider sx={{ my: 3, bgcolor: "rgba(0,0,0,0.08)" }} />

          {/* Relevant Coursework */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: "#1E293B",
              mb: 1.5,
            }}
          >
            Relevant Coursework
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {data.coursework.map((course, i) => (
              <Chip
                key={i}
                label={course}
                sx={{
                  fontWeight: 600,
                  borderRadius: "8px",
                  px: 1.5,
                  background:
                    "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
                  color: "#fff",
                  boxShadow: "0px 3px 12px rgba(99,102,241,0.4)",
                  "&:hover": {
                    boxShadow: "0px 5px 18px rgba(236,72,153,0.5)",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}
