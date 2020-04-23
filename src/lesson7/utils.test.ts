import { getAsyncUrl, getUrl } from "./utils";

describe("Image utils", () => {
  describe("Get local transformed links", () => {
    it("test for correct id range 1-1000", () => {
      expect(getUrl(1)).toBe("https://picsum.photos/id/1/200");
      expect(getUrl(10)).toBe("https://picsum.photos/id/10/200");
      expect(getUrl(100)).toBe("https://picsum.photos/id/100/200");
      expect(getUrl(1000)).toBe("https://picsum.photos/id/1000/200");
    });
    it("test for negative values", () => {
      expect(getUrl(-1)).toBe("https://picsum.photos/id/1/200");
      expect(getUrl(-10)).toBe("https://picsum.photos/id/1/200");
      expect(getUrl(-100)).toBe("https://picsum.photos/id/1/200");
    });
    it("test for too huge id values", () => {
      expect(getUrl(1001)).toBe("https://picsum.photos/id/1000/200");
      expect(getUrl(10000)).toBe("https://picsum.photos/id/1000/200");
      expect(getUrl(1000000000)).toBe("https://picsum.photos/id/1000/200");
    });
  });

  describe("Get remotely transformed links", () => {
    it("test for correct id range 0-1000", async () => {
      expect(await getAsyncUrl(1)).toBe("https://picsum.photos/id/1/200");
      expect(await getAsyncUrl(10)).toBe("https://picsum.photos/id/10/200");
      expect(await getAsyncUrl(100)).toBe("https://picsum.photos/id/100/200");
      expect(await getAsyncUrl(1000)).toBe("https://picsum.photos/id/1000/200");
    });
    it("test for negative values", async () => {
      expect(await getAsyncUrl(-1)).toBe("https://picsum.photos/id/1/200");
      expect(await getAsyncUrl(-10)).toBe("https://picsum.photos/id/1/200");
      expect(await getAsyncUrl(-100)).toBe("https://picsum.photos/id/1/200");
    });
    it("test for too huge id values", async () => {
      expect(await getAsyncUrl(1001)).toBe("https://picsum.photos/id/1000/200");
      expect(await getAsyncUrl(10000)).toBe(
        "https://picsum.photos/id/1000/200"
      );
      expect(await getAsyncUrl(1000000000)).toBe(
        "https://picsum.photos/id/1000/200"
      );
    });
  });
});
