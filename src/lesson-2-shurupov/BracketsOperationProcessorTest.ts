import { BracketsOperationProcessor } from "./BracketsOperationProcessor";
import { ExtractedOperation } from "./ExtractedOperation";
import { Operation } from "./Operation";

const processor: BracketsOperationProcessor = new BracketsOperationProcessor();

describe("BracketsOperationProcessor extractOperation method", () => {
  it("Find Operation sin(45)", () => {
    const result: ExtractedOperation = {
      operation: Operation.UNSUPPORTED_OPERATION,
      arguments: [],
    };
    const found: boolean = processor.extractOperation("sin(45)", result);
    expect(found).toEqual(true);
    expect(result).toEqual({ operation: Operation.SIN, arguments: ["45"] });
  });
  it("Find Operation cos(30)", () => {
    const result: ExtractedOperation = {
      operation: Operation.UNSUPPORTED_OPERATION,
      arguments: [],
    };
    const found: boolean = processor.extractOperation("cos(30)", result);
    expect(found).toEqual(true);
    expect(result).toEqual({ operation: Operation.COS, arguments: ["30"] });
  });
  it("Find Operation tg(30)", () => {
    const result: ExtractedOperation = {
      operation: Operation.UNSUPPORTED_OPERATION,
      arguments: [],
    };
    const found: boolean = processor.extractOperation("tg(30)", result);
    expect(found).toEqual(true);
    expect(result).toEqual({ operation: Operation.TG, arguments: ["30"] });
  });
  it("Find Operation ctg(30)", () => {
    const result: ExtractedOperation = {
      operation: Operation.UNSUPPORTED_OPERATION,
      arguments: [],
    };
    const found: boolean = processor.extractOperation("ctg(30)", result);
    expect(found).toEqual(true);
    expect(result).toEqual({ operation: Operation.CTG, arguments: ["30"] });
  });
  it("Find Operation sqrt(30)", () => {
    const result: ExtractedOperation = {
      operation: Operation.UNSUPPORTED_OPERATION,
      arguments: [],
    };
    const found: boolean = processor.extractOperation("sqrt(30)", result);
    expect(found).toEqual(true);
    expect(result).toEqual({ operation: Operation.SQRT, arguments: ["30"] });
  });
  it("Find Operation sqr(30)", () => {
    const result: ExtractedOperation = {
      operation: Operation.UNSUPPORTED_OPERATION,
      arguments: [],
    };
    const found: boolean = processor.extractOperation("sqr(30)", result);
    expect(found).toEqual(true);
    expect(result).toEqual({ operation: Operation.SQR, arguments: ["30"] });
  });
});

describe("BracketsOperationProcessor performOperation method", () => {
  it("sin(30)", () => {
    expect(processor.performOperation(Operation.SIN, [30])).toEqual(
      Math.sin((30 * Math.PI) / 180)
    );
  });
  it("tg(30)", () => {
    expect(processor.performOperation(Operation.TG, [30])).toEqual(
      Math.tan((30 * Math.PI) / 180)
    );
  });
  it("ctg(30)", () => {
    expect(processor.performOperation(Operation.CTG, [30])).toEqual(
      1 / Math.tan((30 * Math.PI) / 180)
    );
  });
  it("cos(30)", () => {
    expect(processor.performOperation(Operation.COS, [30])).toEqual(
      Math.cos((30 * Math.PI) / 180)
    );
  });
  it("trunc(4.5)", () => {
    expect(processor.performOperation(Operation.TRUNC, [4.5])).toEqual(4);
  });
  it("round(4.6)", () => {
    expect(processor.performOperation(Operation.ROUND, [4.6])).toEqual(5);
  });
  it("sqrt(4)", () => {
    expect(processor.performOperation(Operation.SQRT, [4])).toEqual(2);
  });
  it("sqrt(2)", () => {
    expect(processor.performOperation(Operation.SQR, [2])).toEqual(4);
  });
});
