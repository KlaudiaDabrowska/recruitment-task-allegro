import { ApiClient } from './ApiClient';

export const getUserRepositories = async (username, params) => {
  const response = await ApiClient.get(`/users/${username}/repos`, {
    params: params,
  });
  return response.data;
};
