import { createInterface } from "readline";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { runner } from "./runner";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question("> ", (answer: string) => {
      const result = runner(answer);

      if (result) {
        console.log(`Result: ${result}`);
      }

      resolve();
    });
  });

async function app(): Promise<null> {
  console.log("Starting app...");
  while (true) {
    await question();
  }
}

app();
