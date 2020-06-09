import { request, testData } from "../__mocks__/request";

it("request test", () => {
  return request().then((data) => expect(data).toEqual(testData));
});
