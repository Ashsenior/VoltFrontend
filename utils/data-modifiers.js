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

export const checkCategoryStatus = (data) => {
  switch (data) {
    case "B":
      return "Brief";
      break;
    case "I":
      return "Image/Poster";
      break;
    case "V":
      return "Video";
      break;
    case "R":
      return "Research/Report";
      break;
    case "S":
      return "Status";
      break;
  }
};

export const checkKeywordStatus = (data) => {
  switch (data) {
    case "B":
      return "Business Model";
      break;
    case "CU":
      return "Customer analysis";
      break;
    case "P":
      return "Pricing Strategy";
      break;
    case "CO":
      return "Competitor Analysis";
      break;
    case "PFA":
      return "Product Feedback Analysis";
      break;
    case "I":
      return "Insider Info";
      break;
    case "S":
      return "Startup Registration";
      break;
    case "R":
      return "Resources";
      break;
    case "C":
      return "Marketing Content";
      break;
  }
};

export const checkTeamDomain = (data) => {
  switch (data) {
    case "T":
      return "Tech";
      break;
    case "S":
      return "Sales";
      break;
    case "M":
      return "Marketing";
      break;
    case "O":
      return "Operations";
      break;
    case "R/C":
      return "Research/Content";
      break;
    case "HR":
      return "Human Resource";
      break;
    case "L":
      return "Legal Advice";
      break;
    case "Me":
      return "Mentor";
      break;
    case "I":
      return "Investor";
      break;
  }
};
