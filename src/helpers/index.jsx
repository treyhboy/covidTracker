import { stateKeys, stateKeyVsName, stateNames } from "../constants";
import { apiEndpoint } from "../constants";
export const getHighlightsData = (response) => {
  let totalConfirmed = 0;
  let totalActive = 0;
  let totalRecovered = 0;
  let totalDeceased = 0;

  stateKeys.forEach((stateKey) => {
    totalConfirmed += response[stateKey].total.confirmed | 0;
    totalDeceased += response[stateKey].total.deceased | 0;
    totalRecovered += response[stateKey].total.recovered | 0;
  });
  totalActive = totalConfirmed - totalDeceased - totalRecovered;
  return [totalConfirmed, totalActive, totalRecovered, totalDeceased];
};
export const getStateHighlightsData = (response) => {
  const totalConfirmed = response.confirmed;
  const totalRecovered = response.recovered;
  const totalDeceased = response.deceased;
  const totalActive = totalConfirmed - totalRecovered - totalDeceased;
  return [totalConfirmed, totalActive, totalRecovered, totalDeceased];
};
export const findKey = (stateName) => {
  let stateKey = "";
  stateKeys.forEach((Key) => {
    if (stateKeyVsName[Key] === stateName) {
      stateKey = Key;
    }
  });
  return stateKey;
};

export const findOptions = (input) => {
  let matches = [];
  stateNames.forEach((stateName) => {
    if (stateName.includes(input)) matches.push(stateName);
  });
  return matches;
};
export const getResponse = async () => {
  let response = await fetch(apiEndpoint);
  response = await response.json();
  return response;
};
