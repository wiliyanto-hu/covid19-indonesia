import axios from "axios";

export const fetchCardData = async () => {
  const { data } = await axios.get(
    "https://apicovid19indonesia-v2.vercel.app/api/indonesia"
  );

  return data;
};
export const fetchProvinsiData = async () => {
  const { data } = await axios.get(
    "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi"
  );
  return data;
};
export const fetchCumulativeData = async () => {
  const { data } = await axios.get(
    "https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian"
  );
  return data;
};
