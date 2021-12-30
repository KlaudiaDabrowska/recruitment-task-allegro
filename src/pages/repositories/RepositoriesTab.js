import { RepositoriesList } from './RepositoriesList';
import { useRepositoriesTabState } from './useRepositoriesTabState';
import { UsernameForm } from './UsernameForm';
import { Header } from 'pages/repositories/Header';

export const RepositoriesTab = () => {
  const { repositories, isLoading, errorMessage, isEmpty, username, setUsername } = useRepositoriesTabState();

  return (
    <>
      <Header title={`Check out your friends' repositories`} />
      <UsernameForm setUsername={setUsername} username={username} />
      <RepositoriesList data={repositories} isLoading={isLoading} errorMessage={errorMessage} isEmpty={isEmpty} />
    </>
  );
};
