import { FormControl, NativeSelect, InputLabel } from "@material-ui/core";
const ProvinceSelector = ({ data, changeProvince }) => {
  if (!data) {
    return null;
  }
  const provinsis = data.map((provinsi, i) => (
    <option value={provinsi.provinsi} key={i}>
      {provinsi.provinsi}
    </option>
  ));
  return (
    <FormControl margin="normal">
      <InputLabel htmlFor="select">Select Province</InputLabel>
      <NativeSelect onChange={changeProvince} id="select">
        {provinsis}
      </NativeSelect>
    </FormControl>
  );
};
export default ProvinceSelector;
