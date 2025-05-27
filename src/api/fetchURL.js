import { fetchAPI } from './fetchAPI';

const API_URL = 'https://dummyjson.com/';

export const fetchAllProducts = () => {
  return fetchAPI(`${API_URL}products`);
};

// 카테고리 별
export const fetchCategoryProducts = (category) => {
  return fetchAPI(`${API_URL}products/category/${category}`);
};

// 검색
export const fetchSearchProducts = (query) => {
  return fetchAPI(`${API_URL}products/search?q=${query}`);
};
