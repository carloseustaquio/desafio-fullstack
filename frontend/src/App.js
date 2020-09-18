import React from 'react';
import Routes from "./routes/index"

// styles
import { ThemeProvider } from "styled-components";
import theme from './theme';
import { GlobalStyles } from "./theme/styles.App";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
