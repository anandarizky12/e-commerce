import axios from 'axios';

const url = 'http://localhost:5000/data';
// /category=${category}&search=${search}&sortorder${sortOrder}
export const fetchProducts= (category, search, sortOrder) => axios.get(`${url}/products`);
export const fetchDetails = (id) => axios.get(`${url}/${id}`);
export const getUserSignIn = (email, password) => axios.post(`http://localhost:5000/user/signin`,{email, password});
export const getUserRegister = (username, email, password) => axios.post(`http://localhost:5000/user/register`,{username, email, password});
export const createProduct = (userInfo,  product) =>axios.post(`${url}/create`, product, {headers: {Authorization: 'Bearer ' +  userInfo.token}});
export const updateProduct = (userInfo, product) =>axios.put(
                                            `${url}/create` + product._id,
                                            product,
                                            {
                                            headers: {
                                                Authorization: 'Bearer ' + userInfo.token,
                                            },
                                            }
                                        );