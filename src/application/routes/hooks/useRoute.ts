import { ENV_PASSWORD, ENV_USER } from '@config';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';

export const useRoute = () => {
  const { getUserData } = useLocalStorage();
  const userData = getUserData();

  const hasAuthentication = (): boolean =>
    [userData?.name].includes(ENV_USER) &&
    [userData?.password].includes(ENV_PASSWORD);

  return {
    hasAuthentication,
  };
};
