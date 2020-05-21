// Заготовка для самостоятельного упражнения для реализации проверки на alphnumeric

export type Value = string | number | boolean;

export type ValidationResult = Error | undefined;

export type ValidatorFunc = (value: Value, key: string) => ValidationResult;

export const isNotEmpty: ValidatorFunc = (value, key) => {
  if (
    typeof value !== "number" && typeof value !== "boolean" ? !!value : true
  ) {
    return undefined;
  }

  return new Error(`${key} is required`);
};

// export class Validator {
//   errors: { [key: string]: Error | undefined } = {};
//   values: { [key: string]: Value } = {};

//   updateField(key: string, value: Value) {
//     this.values[key] = value;
//   }

//   hasErrors() {
//     for (const key in this.errors) {
//       if (this.errors[key]) {
//         return false;
//       }
//     }
//   }

//   checkIsNotEmpty(key: string) {
//     const value = this.values[key];
//     const isValid =
//       typeof value !== "number" && typeof value !== "boolean" ? !!value : true;

//     if (!isValid) {
//       this.errors[key] = new Error(`${key} is required`);
//     } else {
//       this.errors[key] = undefined;
//     }
//   }

//   checkIsAlphanumeric(key: string) {
//     const value = this.values[key];
//     const isValid = /^[a-zA-Z0-9_]*$/.test(value.toString());

//     if (!isValid) {
//       this.errors[key] = new Error(`${key} must be alphanumeric`);
//     } else {
//       this.errors[key] = undefined;
//     }
//   }
// }
