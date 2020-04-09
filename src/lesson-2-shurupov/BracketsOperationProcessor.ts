import { AbstractOperationProcessor } from "./AbstractOperationProcessor";
import { Operation } from "./Operation";

export class BracketsOperationProcessor extends AbstractOperationProcessor {
  private availableOperations: Operation[] = [
    Operation.SIN,
    Operation.COS,
    Operation.CTG,
    Operation.TG,
    Operation.SQRT,
    Operation.SQR,
    Operation.TRUNC,
    Operation.ROUND,
  ];

  protected getAvailableOperations(): Operation[] {
    return this.availableOperations;
  }

  performOperation(operation: Operation, parameters: number[]): number {
    switch (operation) {
      case Operation.SIN:
        return Math.sin(this.degreesToRadians(parameters[0]));
      case Operation.COS:
        return Math.cos(this.degreesToRadians(parameters[0]));
      case Operation.TG:
        return Math.tan(this.degreesToRadians(parameters[0]));
      case Operation.CTG:
        return 1 / Math.tan(this.degreesToRadians(parameters[0]));
      case Operation.SQR:
        return parameters[0] * parameters[0];
      case Operation.SQRT:
        return Math.sqrt(parameters[0]);
      case Operation.TRUNC:
        return Math.trunc(parameters[0]);
      case Operation.ROUND:
        return Math.round(parameters[0]);
      default:
        throw new Error("Unsupported operation");
    }
  }

  protected operationFound(
    expression: string,
    operation: Operation,
    i: number
  ): boolean {
    if (!super.bracketOpenedHere(expression, operation, i)) {
      return false;
    }

    const operationNameLength = (operation as string).length;
    const bracketToken: string = expression.substr(
      i - operationNameLength,
      operationNameLength
    );
    return bracketToken == (operation as string);
  }

  extractArguments(
    expression: string,
    operation: Operation,
    i: number
  ): string[] {
    const closeBracketPosition = expression.indexOf(")", i + 1);
    const result: string[] = [];
    result[0] = expression.substr(i + 1, closeBracketPosition - i - 1);
    return result;
  }

  protected degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}
