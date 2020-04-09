import { Operation } from "./Operation";
import { AbstractOperationProcessor } from "./AbstractOperationProcessor";

export class TwoArgumentsProcessor extends AbstractOperationProcessor {
  private availableOperations: Operation[] = [
    Operation.POWER,
    Operation.ADDITION,
    Operation.SUBTRACTION,
    Operation.MULTIPLICATION,
    Operation.DIVISION,
  ];

  protected getAvailableOperations(): Operation[] {
    return this.availableOperations;
  }

  public extractArguments(
    expression: string,
    operation: Operation,
    operationSignPosition: number
  ): string[] {
    const result: string[] = [];
    result[0] = expression.substr(0, operationSignPosition);
    result[1] = expression.substr(operationSignPosition + 1);
    return result;
  }

  public performOperation(operation: Operation, parameters: number[]): number {
    switch (operation) {
      case Operation.POWER:
        return Math.pow(parameters[0], parameters[1]);
      case Operation.ADDITION:
        return parameters[0] + parameters[1];
      case Operation.SUBTRACTION:
        return parameters[0] - parameters[1];
      case Operation.MULTIPLICATION:
        return parameters[0] * parameters[1];
      case Operation.DIVISION:
        return parameters[0] / parameters[1];
      default:
        throw new Error("Unsupported operation");
    }
  }
}
