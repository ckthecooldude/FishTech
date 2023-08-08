import axios from 'axios';

const ApiProcessor = async (url) => {
  try {
    const response = await axios.post('https://catch-the-phish-ryp0.onrender.com/search/', {
      q: url,
    });
    return response.data; // The response should contain the report data
  } catch (error) {
    console.error(error);
    return { error: 'API request failed.' };
  }
};

export default ApiProcessor;
