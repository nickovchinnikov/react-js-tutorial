import { sleep } from "@/utils/sleep";

export const sentStatistic = async () => {
  await sleep(1000);
};

export const createConnection = async () => {
  await sleep(100000);
};

export const login = async (name: string) => {
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({ name }),
  });
  const json = await response.json();

  if (response.ok) {
    return json;
  }
  throw json;
};

export const logout = async () => {
  const response = await fetch("/auth/logout", {
    method: "POST",
  });

  const json = await response.json();

  if (response.ok) {
    return json;
  }
  throw json;
};

export const getUserSession = async () => {
  const response = await fetch("/auth/current");
  const json = await response.json();

  if (response.ok) {
    return json;
  }
  throw json;
};

export const isLoggedIn = async () => {
  const response = await fetch("/auth/current");
  const json = await response.json();

  return response.ok && Boolean(json.name);
};
