import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserRepositories } from '../../config/UserService';

export const useRepositoriesTabState = () => {
  const { paramUsername } = useParams();

  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState(paramUsername);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const setError = (error) => {
      setIsEmpty(false);
      setErrorMessage(decodeError(error));
    };

    const setEmpty = () => {
      setIsEmpty(true);
      setErrorMessage(null);
    };

    const setRepos = (repositories) => {
      setRepositories(repositories.sort((a, b) => b.stargazers_count - a.stargazers_count));
      setIsEmpty(false);
      setErrorMessage(null);
    };

    if (!username) {
      return;
    }

    setIsLoading(true);
    getUserRepositories(encodeURIComponent(username), { per_page: 100 }) //TODO: Add pagination, max items per page = 100
      .then((repositories) => {
        setIsLoading(false);
        if (repositories.length === 0) {
          setEmpty();
        } else {
          setRepos(repositories);
        }
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [username]);

  const decodeError = (error) => {
    switch (error.response.status) {
      case 404:
        return 'User not found';
      default:
        return 'Unknown error';
    }
  };

  return {
    repositories,
    isLoading,
    errorMessage,
    isEmpty,
    username,
    setUsername,
  };
};
