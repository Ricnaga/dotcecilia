import { ENV_USER_STORAGE_KEY } from '../../config';

type UserLogin = { name: string; password: string };

export const useLocalStorage = () => {
  const maskData = (userData: UserLogin) =>
    window.btoa(JSON.stringify(userData));

  const unMaskData = (userData: string) => JSON.parse(window.atob(userData));

  const saveUserData = (userData: UserLogin) =>
    localStorage.setItem(ENV_USER_STORAGE_KEY, maskData(userData));

  const getUserData = (): UserLogin | null => {
    const userData = localStorage.getItem(ENV_USER_STORAGE_KEY);
    return userData ? unMaskData(userData) : null;
  };

  const deleteUserData = () => localStorage.removeItem(ENV_USER_STORAGE_KEY);

  return {
    saveUserData,
    getUserData,
    deleteUserData,
  };
};
