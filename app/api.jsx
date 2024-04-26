import axios from 'axios';

const BASE_URL = 'http://192.168.3.37:3004'; // Removed trailing slash

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      username,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Specifically handle 401 errors
      if (error.response.status === 401) {
        console.error('Authentication error: Check username and password');
      }
      // Log detailed error responses
      console.error('Error data:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};