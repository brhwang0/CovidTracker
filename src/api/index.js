import axios from "axios";

// API Link
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  // try will be executed if fetch is successful
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};
