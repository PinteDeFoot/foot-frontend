import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../constants';

const getArticles = (url: string) => axios.get(url).then((res) => res.data);

export const useGetArticles = () => {
  const url = `${API_BASE_URL}/api-rest/homepage/last-articles`;
  const { data, error, isLoading } = useQuery(['articles'], () => getArticles(url));
  return {
    articles: data,
    error,
    isLoading,
  };
};

const getArticleDetails = (url: string) => axios.get(url).then((res) => res.data);

export const useGetArticleDetails = (id: string) => {
  const url = `${API_BASE_URL}/api-rest/article/detail/${id}`;
  const { data, error, isLoading } = useQuery(['articles', id], () => getArticleDetails(url));
  return {
    article: data,
    error,
    isLoading,
  };
};
