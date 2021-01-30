import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import BarChart from "./BarChart";
import Card from "./Card";
const Cards = ({ provinces, selected }) => {
  const [data, setData] = useState("");

  const setProvince = (selected = "INDONESIA") => {
    const getProvince = provinces.find(
      (province) => province.provinsi === selected
    );
    setData(getProvince);
  };
  useEffect(() => {
    setProvince(selected);
  }, [provinces, selected]);
  if (!data) {
    return (
      <Card
        type="Loading Data Please Wait"
        total="Total"
        lastUpdate="LastUpdate"
      />
    );
  } else {
    const { positif, dirawat, sembuh, meninggal, kasus } = data;
    return (
      <>
        <Grid container spacing={2} justify="center">
          <Card
            type="Cases"
            total={positif || kasus}
            color="white"
            bgColor="rgba(230,0,0,0.7)"
          />
          <Card
            type="Recovery"
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
        <BarChart data={data} />
      </>
    );
  }
};
export default Cards;
