import { ImageLink, DefaultImageSize, getAsyncUrl, getUrl } from "./utils";

describe("Image utils", () => {
  describe("Get local transformed links", () => {
    it("test for correct id range 1-1000", () => {
      expect(getUrl(1)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
      expect(getUrl(10)).toBe(`${ImageLink}/10/${DefaultImageSize}`);
      expect(getUrl(100)).toBe(`${ImageLink}/100/${DefaultImageSize}`);
      expect(getUrl(1000)).toBe(`${ImageLink}/1000/${DefaultImageSize}`);
    });
    it("test for low values", () => {
      expect(getUrl(0)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
      expect(getUrl(-1)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
      expect(getUrl(-10)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
      expect(getUrl(-100)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
    });
    it("test for too huge id values", () => {
      expect(getUrl(1001)).toBe(`${ImageLink}/1000/${DefaultImageSize}`);
      expect(getUrl(10000)).toBe(`${ImageLink}/1000/${DefaultImageSize}`);
      expect(getUrl(1000000000)).toBe(`${ImageLink}/1000/${DefaultImageSize}`);
    });
  });

  describe("Get remotely transformed links", () => {
    it("test for correct id range 0-1000", async () => {
      expect(await getAsyncUrl(1)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
      expect(await getAsyncUrl(10)).toBe(`${ImageLink}/10/${DefaultImageSize}`);
      expect(await getAsyncUrl(100)).toBe(
        `${ImageLink}/100/${DefaultImageSize}`
      );
      expect(await getAsyncUrl(1000)).toBe(
        `${ImageLink}/1000/${DefaultImageSize}`
      );
    });
    it("test for low values", async () => {
      expect(await getAsyncUrl(0)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
      expect(await getAsyncUrl(-1)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
      expect(await getAsyncUrl(-10)).toBe(`${ImageLink}/1/${DefaultImageSize}`);
      expect(await getAsyncUrl(-100)).toBe(
        `${ImageLink}/1/${DefaultImageSize}`
      );
    });
    it("test for too huge id values", async () => {
      expect(await getAsyncUrl(1001)).toBe(
        `${ImageLink}/1000/${DefaultImageSize}`
      );
      expect(await getAsyncUrl(10000)).toBe(
        `${ImageLink}/1000/${DefaultImageSize}`
      );
      expect(await getAsyncUrl(1000000000)).toBe(
        `${ImageLink}/1000/${DefaultImageSize}`
      );
    });
  });
});
