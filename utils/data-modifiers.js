import Moment from "moment";

export const handleGetFullDateWithTime = (date) => {
  Moment.locale("en");
  return Moment(date).format("DD MMMM YYYY, h:mm a");
};

export const handleGetFullDateWithoutTime = (date) => {
  Moment.locale("en");
  return Moment(date).format("DD MMMM YYYY");
};

export const handleGetDateMonth = (date) => {
  Moment.locale("en");
  return Moment(date).format("D MMM");
};

export const handleGetDateNewMonth = (date) => {
  Moment.locale("en");
  return Moment(date).format("Do MMM");
};

export const handleGetOnlyTime = (date) => {
  Moment.locale("en");
  return Moment(date).format("h:mm a");
};

export const getTimeInMin = (value) => {
  return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
};

export const getDateWithDash = (date) => {
  Moment.locale("en");
  return Moment(date).format("DD-MM-YYYY");
};

export const getDateWithDay = (date) => {
  Moment.locale("en");
  return Moment(date).format("dddd, DD MMMM YYYY");
};

export const getDaysDifferenceFromToday = (to) => {
  Moment.locale("en");
  return Moment().to(Moment(to));
};
