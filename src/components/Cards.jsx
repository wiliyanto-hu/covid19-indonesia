import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { fetchCardData } from "../utils/api";

import Card from "./Card";
const Cards = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchCard = async () => {
      const data = await fetchCardData();
      setData(data);
    };
    fetchCard();
  }, []);

  if (!data) {
    return (
      <Card
        type="Loading Data Please Wait"
        total="Total"
        lastUpdate="LastUpdate"
      />
    );
  } else {
    const { positif, dirawat, sembuh, meninggal, lastUpdate } = data;
    return (
      <>
        <Typography variant="subtitle1">
          Last Update: {new Date(lastUpdate).toDateString()}
        </Typography>{" "}
        <Grid container spacing={2} justify="center">
          <Card
            type="Cases"
            total={positif}
            color="white"
            bgColor="rgba(230,0,0,0.7)"
          />
          <Card
            type="In Recovery"
            total={dirawat}
            color="white"
            bgColor="rgba(0,0,200,0.7)"
          />
          <Card
            type="Recovered"
            total={sembuh}
            color="white"
            bgColor="rgba(0,170,0,0.9)"
          />
          <Card
            type="Deaths"
            total={meninggal}
            color="white"
            bgColor="rgba(170,0,0,0.9)"
          />
        </Grid>
      </>
    );
  }
};
export default Cards;
