import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect, InputLabel } from "@material-ui/core";
// import { fetchProvinsiData } from "../utils/api";
const CitySelector = ({ data, changeProvince }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const data = await fetchProvinsiData();
  //     setData(data);
  //   };
  //   fetch();
  // }, []);

  if (!data.length) {
    return null;
  }
  const provinsis = data.map((provinsi, i) => (
    <option value={provinsi.provinsi} key={i}>
      {provinsi.provinsi}
    </option>
  ));
  return (
    <FormControl>
      <InputLabel htmlFor="select">Select Province</InputLabel>
      <NativeSelect onChange={changeProvince} id="select">
        <option aria-label="none" value="INDONESIA">
          INDONESIA
        </option>
        {provinsis}
      </NativeSelect>
    </FormControl>
  );
};
export default CitySelector;
