import axios from 'axios';

const BASE_URL = 'http://192.168.3.37:8080/api'; // Removed trailing slash

export const registerUser = async (username, email, password) => {
  try {
    const user = {
      login: username,
      firstName: 'DefaultFirstName',
      lastName: 'DefaultLastName',
      email: email,
      imageUrl: 'https://img.freepik.com/free-vector/hot-dog-street-snack-isolated-transparent_107791-18353.jpg?w=1060&t=st=1714324927~exp=1714325527~hmac=8ef5f90c36e8dc6eb35cfc88ef2ecc0b187375d5d9414ea19bf85727f754c1e9',
      activated: true,
      langKey: 'en',
      createdBy: 'admin',
      createdDate: new Date().toISOString(),
      lastModifiedBy: 'admin',
      lastModifiedDate: new Date().toISOString(),
      authorities: ['ROLE_USER'],
      password: password
    };

    const response = await axios.post(`${BASE_URL}/register`, user);

    console.log('Response data:', response.data); // Log response data

    return response.data;
  } catch (error) {
    console.error('Sign up error:', error.response || error.message);
    throw error;
  }
};


export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/authenticate`, {
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
   
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};
