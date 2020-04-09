import { BracketsProcessor } from "./BracketsProcessor";
import { TwoArgumentsProcessor } from "./TwoArgumentsProcessor";
import { OneArgumentProcessor } from "./OneArgumentProcessor";
import { ExtractedOperation } from "./ExtractedOperation";
import { Operation } from "./Operation";
import { AbstractOperationProcessor } from "./AbstractOperationProcessor";
import { BracketsOperationProcessor } from "./BracketsOperationProcessor";

export class Calculator {
  private processors: AbstractOperationProcessor[] = [
    new TwoArgumentsProcessor(),
    new OneArgumentProcessor(),
    new BracketsOperationProcessor(),
  ];

  private bracketsProcessor: BracketsProcessor = new BracketsProcessor();

  public calculate(expression: string): number {
    expression = expression.trim();

    if (this.bracketsProcessor.isInBrackets(expression)) {
      return this.calculate(this.bracketsProcessor.openBrackets(expression));
    }

    for (const processor of this.processors) {
      const operation: ExtractedOperation = {
        operation: Operation.UNSUPPORTED_OPERATION,
        arguments: [],
      };
      if (processor.extractOperation(expression, operation)) {
        return processor.performOperation(
          operation.operation,
          operation.arguments.map((argument: string) =>
            this.calculate(argument)
          )
        );
      }
    }

    return parseFloat(expression);
  }
}
