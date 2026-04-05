import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Stack,
  IconButton,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  Phone,
  Download,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import data from "../data";
import profilePic from "../assets/santhu.JPG";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}15 100%)`,
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {/* LEFT SIDE CONTENT */}
        <Grid item xs={12} md={6}>
          <Typography
            component={motion.h1}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.8rem" },
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.name}
          </Typography>

          <Typography
            component={motion.h2}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              color: theme.palette.primary.main,
              mt: 1,
            }}
          >
            {data.title}
          </Typography>

          <Typography
            component={motion.p}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
              mt: 2,
              color: "text.secondary",
              maxWidth: 500,
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            {data.tagline}
          </Typography>

          {/* Social Icons */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 4 }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <IconButton
              href={data.linkedin}
              target="_blank"
              sx={{
                bgcolor: "#ffffff",
                color: "#0A66C2",
                boxShadow: "0px 6px 15px rgba(10, 102, 194, 0.3)",
                "&:hover": {
                  transform: "scale(1.1)",
                  bgcolor: "#0A66C2",
                  color: "#fff",
                },
              }}
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              href={data.github}
              target="_blank"
              sx={{
                bgcolor: "#ffffff",
                color: "#333",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  transform: "scale(1.1)",
                  bgcolor: "#333",
                  color: "#fff",
                },
              }}
            >
              <GitHub />
            </IconButton>

            <IconButton
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}&su=Job%20Opportunity&body=Hi%20Abhinava,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.`}
              target="_blank"
              sx={{
                bgcolor: "#ffffff",
                color: "#EA4335",
                boxShadow: "0px 6px 15px rgba(234, 67, 53, 0.3)",
                "&:hover": {
                  transform: "scale(1.1)",
                  bgcolor: "#EA4335",
                  color: "#fff",
                },
              }}
            >
              <Email />
            </IconButton>

            <IconButton
              href={`tel:${data.phone}`}
              sx={{
                bgcolor: "#ffffff",
                color: "#10B981",
                boxShadow: "0px 6px 15px rgba(16, 185, 129, 0.3)",
                "&:hover": {
                  transform: "scale(1.1)",
                  bgcolor: "#10B981",
                  color: "#fff",
                },
              }}
            >
              <Phone />
            </IconButton>
          </Stack>

          {/* Resume Button */}
          <a
            href={data.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
          <Button
            startIcon={<Download />}
            variant="contained"
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            sx={{
              mt: 5,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              boxShadow: `0px 8px 20px ${theme.palette.primary.main}40`,
              "&:hover": {
                background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                boxShadow: `0px 10px 24px ${theme.palette.primary.main}60`,
              },
            }}
          >
            Download Resume
          </Button>
          </a>
        </Grid>

        {/* RIGHT SIDE IMAGE */}
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center" }}
        >
          <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }} // ✅ Zoom on hover
            transition={{ duration: 0.4 }}
            sx={{
              position: "relative",
              display: "inline-block",
              borderRadius: "50%",
              padding: "6px",
              boxShadow: `0px 8px 24px ${theme.palette.primary.main}40`,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              cursor: "pointer",
            }}
          >
            <Avatar
              src={profilePic}
              alt="Profile"
              sx={{
                width: { xs: 220, md: 300 },
                height: { xs: 220, md: 300 },
                borderRadius: "50%",
                border: "5px solid white",
                boxShadow: `0px 12px 30px ${theme.palette.primary.main}35`,
                transition: "transform 0.4s ease-in-out",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
