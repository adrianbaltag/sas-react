import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
// import CarouselAdmin from "../components/CarouselAdmin";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1a1a1a",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Profile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs>
          <Item>
            <h1 style={{ fontSize: "1rem", color: "white" }}>
              Our recomandation
            </h1>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>{/* <CarouselAdmin /> */}</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
