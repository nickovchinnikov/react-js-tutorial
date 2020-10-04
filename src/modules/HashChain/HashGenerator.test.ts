import { generateHash, findHash } from "./HashGenerator";

describe("Hash Generator", () => {
  it("generateHash check", () => {
    expect(generateHash(1, "test")).toEqual(
      "288fa5fc4a3b311a79c33edbc8ac0a96e7a4a58235a17216067f31dfe6d52a36"
    );
  });
  it("findHash check startWith 0", () => {
    expect(findHash("test", "0")).toEqual(
      "0434b4c3eac49e190708e84db0ca15b257161bddf165ac62a914c19dacb087f1"
    );
  });
  it("findHash check startWith 00", () => {
    expect(findHash("test", "00")).toEqual(
      "009de86cf0d412600e78eb035878eaf79fb6c897ba817fd567a150931c465b8f"
    );
  });
  it("findHash check startWith 000", () => {
    expect(findHash("test", "000")).toEqual(
      "0003923002355cc8f543b82c93668b291748f3cd46c047a994c91ba11d84b0e8"
    );
  });
});
