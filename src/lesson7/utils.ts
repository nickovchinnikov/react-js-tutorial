export const getUrl = (id: number): string => {
  const goodId = Math.min(1000, Math.max(1, id));
  return `https://picsum.photos/id/${goodId}/200`;
};

export const getAsyncUrl = async (id: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getUrl(id));
    }, 0);
  });
};
