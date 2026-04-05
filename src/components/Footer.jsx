import React from "react";
import { Box, Typography } from "@mui/material";
import data from "../data";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        textAlign: "center",
        mt: 6,
        color: "#fff",
        background: "linear-gradient(90deg,#4F46E5,#EC4899)",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} {data.name}
      </Typography>
    </Box>
  );
}
