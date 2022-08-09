import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
// import { useStore } from '../../store';
import { API_BASE_URL } from '../constants';

const getUserDetails = (url: string) => axios.get(url).then((res) => res.data);

export const useGetUserDetails = (userId?: string) => {
  const url = `${API_BASE_URL}/api-rest/homepage/users/${userId}`;
  const { data, isError, isLoading } = useQuery(['users', userId], () => getUserDetails(url), { enabled: !!userId });
  return {
    user: data,
    isError,
    isLoading,
  };
};

const postUserLogin = (url: string, data: Record<string, string>) => axios.post(url, data);

export const usePostUserLogin = () => {
  // const { setUserDetails } = useStore();
  // const navigate = useNavigate();
  const url = `${API_BASE_URL}/api-rest/homepage/users/login`;
  const { mutate, isError, isLoading, isSuccess, data } = useMutation(
    (data: Record<string, string>) => postUserLogin(url, data),
    {
      // onSuccess: (data) => {
      //   setUserDetails({ userId: data.data.userId });
      //   navigate('/');
      // },
    },
  );
  return {
    mutate,
    isError,
    isLoading,
    isSuccess,
    data,
  };
};
