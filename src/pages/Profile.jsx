import * as React from "react";
import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
import Cube from "../components/Cube";
import { Carousel } from "../components/Carousel";




export function Profile() {
  return(
    <>
    <Navbar/>
    <h1 style={{color: "white", textAlign: "center", fontFamily: "Roboto sans-serif", fontWeight: "200"}}>Our recomandations</h1>
    <Cube/>
    <h2 style={{color: "white", textAlign: "center", fontFamily: "Roboto ", fontWeight: "200", marginTop: "12em"}}>My destinations</h2>
    <Carousel/>
    </>
  )
}
