import axios from "axios";

const APP_URL = import.meta.env.VITE_APP_URL;

export const getRandomBooks = async () => {
  const URL = `${APP_URL}/random-books`;

  try {
    const response = await axios.get(URL);

    return response;


  } catch (error) {
    throw new Error(error.message);
  }

};