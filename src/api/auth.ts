import { sleep } from '@/utils/sleep';

export const login = async (name: string) => {
  await localStorage.setItem("login", name);
};

export const logout = async () => {
  await localStorage.removeItem("login");
};

export const isLoggedIn = async () => {
  await sleep(2000);
  const login = await localStorage.getItem("login");
  return Boolean(login);
};
