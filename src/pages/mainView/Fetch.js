import { useEffect, useState } from 'react';

export const FetchData = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  console.log(repos);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/allegro/repos`);
        // const response = await fetch(`https://api.github.com/users/${userName}/repos`);
        const json = await response.json();
        setRepos(json);
        console.log(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return {
    error: error,
    isLoading: isLoading,
    repos: repos,
  };
};
