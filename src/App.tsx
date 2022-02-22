import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import dark from "./styles/theme/dark";
import light from "./styles/theme/light";
import { Grid } from "./Layout/styles";
import Header from "./Layout/Header";
import Aside from "./Layout/Aside";
import Dashboard from "./Pages/Dashboard";
import List from "./Pages/List";
import Content from "./Layout/Content";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <Grid>
          <Header />
          <Aside />
          <Content>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/List/:type" element={<List />} />
            </Routes>
          </Content>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}
