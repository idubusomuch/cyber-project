import { fetchAPI } from './fetchAPI';

const API_URL = 'https://dummyjson.com/';

export const fetchAllProducts = () => {
  return fetchAPI(`${API_URL}products`);
};

export const fetchProductsInfiniteScroll = (skip = 0, limit = 8) => {
  console.log('[API 호출]', skip, limit);
  return fetchAPI(`${API_URL}products?limit=${limit}&skip=${skip}`);
};

// 카테고리 별 (메인페이지)
export const fetchCategoryProductsBanner = (category, limit = 8) => {
  return fetchAPI(`${API_URL}products/category/${category}?limit=${limit}`);
};

// 카테고리 목록 불러오기
export const fetchAllCategories = () => {
  return fetchAPI(`${API_URL}products/categories`);
};

// 카테고리 별 (상품페이지)
export const fetchCategoryProducts = (category, skip = 0, limit = 8) => {
  return fetchAPI(
    `${API_URL}products/category/${category}?limit=${limit}&skip=${skip}`,
  );
};

// 검색
export const fetchSearchProducts = (query) => {
  return fetchAPI(`${API_URL}products/search?q=${query}`);
};
