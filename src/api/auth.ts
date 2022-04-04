import { sleep } from "@/utils/sleep";

export const sentStatistic = async (): Promise<void> => {
  await sleep(1000);
};

export const createConnection = async (): Promise<void> => {
  await sleep(100000);
};

export const login = async (name: string): Promise<void> => {
  await sleep(1000);

  localStorage.setItem("login", name);
};

export const logout = async (): Promise<void> => {
  await sleep(1000);

  localStorage.removeItem("login");
};

export const getUserSession = async (): Promise<string | null> => {
  await sleep(2000);
  const login = localStorage.getItem("login");
  return login;
};

export const isLoggedIn = async (): Promise<boolean> => {
  const login = await getUserSession();
  return Boolean(login);
};
