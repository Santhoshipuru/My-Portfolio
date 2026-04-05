import React from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  Button,
  Box,
  Stack,
  Chip,
} from "@mui/material";
import { Launch, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import data from "../data";

export default function Projects() {
  return (
    <Container id="projects" sx={{ py: 10, maxWidth: "1100px" }}>
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
        My Projects
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {data.projects.map((proj, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              sx={{
                p: 3,
                borderRadius: "20px",
                boxShadow: "0px 12px 35px rgba(79, 70, 229, 0.15)",
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0px 14px 40px rgba(79, 70, 229, 0.25)",
                },
              }}
            >
              {/* Project Image (Optional) */}
              {proj.image && (
                <Box
                  component="img"
                  src={proj.image}
                  alt={proj.name}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    mb: 2,
                    boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
                  }}
                />
              )}

              {/* Project Name */}
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {proj.name}
              </Typography>

              {/* Tech Stack */}
              <Typography
                variant="subtitle2"
                sx={{
                  color: "primary.main",
                  mt: 0.5,
                  fontWeight: 600,
                }}
              >
                {proj.tech}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1.5, minHeight: "55px" }}
              >
                {proj.desc}
              </Typography>

              {/* Technologies Used */}
              {proj.technologies && proj.technologies.length > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                  {proj.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      variant="outlined"
                      sx={{
                        fontWeight: 600,
                        color: "#4F46E5",
                        borderColor: "#4F46E5",
                        background: "rgba(79, 70, 229, 0.05)",
                      }}
                    />
                  ))}
                </Stack>
              )}

              {/* Buttons */}
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                {/* GitHub Button */}
                {proj.github && (
                  <Button
                    href={proj.github}
                    target="_blank"
                    variant="outlined"
                    startIcon={<GitHub />}
                    sx={{
                      borderRadius: "10px",
                      fontWeight: 600,
                      textTransform: "none",
                      color: "white",
                      borderColor: "#4F46E5",
                      "&:hover": {
                        background: "#4F46E5",
                        color: "#fff",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                )}

                {/* Live Demo Button */}
                {proj.link && (
                  <Button
                    href={proj.link}
                    target="_blank"
                    variant="contained"
                    endIcon={<Launch />}
                    sx={{
                      borderRadius: "10px",
                      fontWeight: 600,
                      textTransform: "none",
                      background: "linear-gradient(135deg, #4F46E5, #EC4899)",
                      boxShadow: "0px 4px 12px rgba(79, 70, 229, 0.3)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #EC4899, #4F46E5)",
                        boxShadow: "0px 6px 18px rgba(79, 70, 229, 0.4)",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
