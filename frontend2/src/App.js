import { useEffect } from "react";
import { Provider } from "react-redux";
import Routes from "routes/Routes";
import { store } from "state/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle/globalStyle";
import { theme } from "styles/themes/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
