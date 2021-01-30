import axios from "axios";

export const fetchCardData = async () => {
  try {
    const { data } = await axios.get(
      "https://apicovid19indonesia-v2.vercel.app/api/indonesia"
    );
    return data;
  } catch (e) {
    return e;
  }
};
export const fetchProvinsiData = async () => {
  try {
    const { data } = await axios.get(
      "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi"
    );
    return data;
  } catch (e) {
    return e;
  }
};
export const fetchCumulativeData = async () => {
  try {
    const { data } = await axios.get(
      "https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian"
    );
    return data;
  } catch (e) {
    return e;
  }
};
