import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}
