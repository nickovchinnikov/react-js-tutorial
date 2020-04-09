import { Operation } from "./Operation";
import { AbstractOperationProcessor } from "./AbstractOperationProcessor";

export class OneArgumentProcessor extends AbstractOperationProcessor {
  private availableOperations: Operation[] = [Operation.FACTORIAL];

  protected getAvailableOperations(): Operation[] {
    return this.availableOperations;
  }

  public performOperation(operation: Operation, parameters: number[]): number {
    switch (operation) {
      case Operation.FACTORIAL:
        return this.factorial(parameters[0]);
      default:
        throw new Error("Unsupported operation");
    }
  }

  public extractArguments(
    expression: string,
    operation: Operation,
    operationSignPosition: number
  ): string[] {
    const result: string[] = [];
    result[0] = expression.substr(0, operationSignPosition);
    return result;
  }

  public factorial(count: number): number {
    if (count == 1) {
      return 1;
    }
    return count * this.factorial(count - 1);
  }
}
