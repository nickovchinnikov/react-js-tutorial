import { createInterface } from "readline";
import { Calculator } from "./Calculator";

const commandLineHandler = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculator: Calculator = new Calculator();

const question = (): Promise<null> =>
  new Promise((resolve) => {
    commandLineHandler.question("> ", (answer: string) => {
      console.log(calculator.calculate(answer));
      resolve();
    });
  });

async function app(): Promise<null> {
  while (true) {
    await question();
  }
}

app();
