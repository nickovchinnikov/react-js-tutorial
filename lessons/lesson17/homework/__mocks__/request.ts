export const testData = {
  user: "KOOL AID",
  profession: "cold drink",
};
export const request = () => {
  return new Promise((resolve, reject) => {
    testData
      ? resolve(testData)
      : reject({
          error: "These Are Not the Droids You Are Looking For",
        });
  });
};
