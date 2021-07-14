import { parser, ParsedLineType, ParsedLineIterType } from "./parser";
import { calcChunk } from "./engine";

const calc = (chunk: ParsedLineType): ParsedLineIterType => {
  const result = chunk.reduce<ParsedLineIterType>((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(calc(cur)[0]);
    } else {
      acc.push(cur);
    }

    return acc;
  }, []);

  return calcChunk(result);
};

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const result = calc(stack);

  return Number(result[0]);
};
