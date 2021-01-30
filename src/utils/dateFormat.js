const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Des",
];
const dateFormat = (date) => {
  const theDate = new Date(date);

  return `${theDate.getDate()} ${
    months[theDate.getMonth()]
  } ${theDate.getFullYear()}`;
};
export default dateFormat;
