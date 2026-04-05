import { createTheme } from "@mui/material/styles";

export default function getAppTheme(mode = "light") {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#4F46E5", // Vibrant pastel blue
        light: "#6366F1",
        dark: "#3730A3",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#EC4899", // Accent pink-purple
        light: "#F472B6",
        dark: "#BE185D",
        contrastText: "#ffffff",
      },
      background: {
        default: mode === "light" ? "#F8FAFF" : "#0F172A", // Soft gradient-inspired base
        paper: mode === "light" ? "#ffffff" : "#1E293B",
      },
      text: {
        primary: mode === "light" ? "#1E293B" : "#E2E8F0",
        secondary: mode === "light" ? "#475569" : "#94A3B8",
      },
    },
    typography: {
      fontFamily: "'Poppins', 'Roboto', 'Helvetica', sans-serif",
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    shape: {
      borderRadius: 18,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#ffffffcc" : "#1E293B",
            backdropFilter: "blur(8px)",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
            borderRadius: "18px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            padding: "10px 24px",
            fontSize: "0.95rem",
            fontWeight: 600,
            transition: "all 0.3s ease",
            background: "linear-gradient(90deg, #4F46E5, #6366F1)",
            "&:hover": {
              background: "linear-gradient(90deg, #4338CA, #4F46E5)",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 16px rgba(79, 70, 229, 0.4)",
            },
          },
        },
      },
    },
  });
}
