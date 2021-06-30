import axios from 'axios';

const url = 'http://localhost:5000/data';

export const fetchProducts = () => axios.get(`${url}/products`);
export const fetchDetails = (id) => axios.get(`${url}/${id}`);

