//https://fakeapi.platzi.com/
//https://api.escuelajs.co/api/v1/products


import fetch from "node-fetch";
const url = 'https://api.escuelajs.co/api/v1/';


const response = await fetch(`${url}${'products'}`);

const products = await response.json();

export {products};