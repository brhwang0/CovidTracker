import axios from "axios";

// API Link
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  // try will be executed if fetch is successful
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {}
};
