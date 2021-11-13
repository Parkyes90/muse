import React from "react";
import ReactDOM from "react-dom";
import App from "app";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

const CustomGlobalStyles = () => (
  <GlobalStyles
    styles={{
      a: { color: "inherit", textDecoration: "inherit" },
    }}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <CssBaseline />
        <CustomGlobalStyles />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
