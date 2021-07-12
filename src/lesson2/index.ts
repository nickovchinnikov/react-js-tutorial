import { createInterface } from "readline";

import { runner } from "./runner";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<void> => {
  return new Promise((resolve) => {
    rl.question("> ", (answer: string) => {
      const result = runner(answer);

      if (isFinite(result)) {
        console.log(`Result: ${result}`);
      }

      resolve();
    });
  });
};

async function app(): Promise<null> {
  while (true) {
    await question();
  }
}

app();
