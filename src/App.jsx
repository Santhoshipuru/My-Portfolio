// import React from 'react';
// import Portfolio from './Portfolio';

// export default function App() {
//   return <Portfolio />;
// }


import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import getAppTheme from "./theme/theme";
import Portfolio from "./pages/Portfolio";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = getAppTheme(darkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <Portfolio darkMode={darkMode} onToggle={() => setDarkMode((s) => !s)} />
    </ThemeProvider>
  );
}
