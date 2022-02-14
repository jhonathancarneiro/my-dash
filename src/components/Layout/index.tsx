import { Grid } from "./styles";

import Header from "../Header";
import Aside from "../Aside";
import Content from "../Content";

export default function Layout() {
  return (
    <Grid>
      <Header />
      <Aside />
      <Content />
    </Grid>
  );
}
