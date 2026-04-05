import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Navbar({ darkMode, onToggle }) {
  const sections = ["about", "skills", "training", "experience", "projects", "contact"];
  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: "divider", backdropFilter: "blur(6px)" }}>
      <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Puru Santhoshi
        </Typography>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {sections.map((s) => (
            <Button key={s} color="inherit" component={Link} to={s} smooth duration={600} sx={{ textTransform: "none", mx: 0.5 }}>
              {s[0].toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </Box>

        <IconButton sx={{ ml: 1 }} onClick={onToggle} color="inherit" aria-label="toggle theme">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
