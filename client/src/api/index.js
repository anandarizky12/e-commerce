import axios from 'axios';

const url = 'http://localhost:5000/data';

export const fetchProducts = () => axios.get(`${url}/products`);
export const fetchDetails = (id) => axios.get(`${url}/${id}`);
export const getUserSignIn = (email, password) => axios.post(`http://localhost:5000/user/signin`,{email, password});
export const getUserRegister = (username, email, password) => axios.post(`http://localhost:5000/user/register`,{username, email, password});

