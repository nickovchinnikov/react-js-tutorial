import { Operation } from "./Operation";
import { ExtractedOperation } from "./ExtractedOperation";

export abstract class AbstractOperationProcessor {
  protected abstract getAvailableOperations(): Operation[];

  public extractOperation(
    expression: string,
    result: ExtractedOperation
  ): boolean {
    for (const operation of this.getAvailableOperations()) {
      let openBrackets = 0;

      for (let i = expression.length - 1; i >= 0; i--) {
        const char: string = expression[i];
        if (char == ")") {
          openBrackets++;
        }
        if (this.bracketOpenedHere(expression, operation, i)) {
          openBrackets--;
        }
        if (
          openBrackets == 0 &&
          this.operationFound(expression, operation, i)
        ) {
          result.operation = operation as Operation;
          result.arguments = this.extractArguments(expression, operation, i);
          return true;
        }
      }
    }
    return false;
  }

  protected operationFound(
    expression: string,
    operation: Operation,
    i: number
  ): boolean {
    const char: string = expression[i];
    return char == operation;
  }

  protected bracketOpenedHere(
    expression: string,
    operation: Operation,
    i: number
  ): boolean {
    const char: string = expression[i];
    return char == "(";
  }

  public abstract extractArguments(
    expression: string,
    operation: Operation,
    operationSignPosition: number
  ): string[];

  public abstract performOperation(
    operation: Operation,
    parameters: number[]
  ): number;
}
