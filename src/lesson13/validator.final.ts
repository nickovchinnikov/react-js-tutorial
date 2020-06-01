// Заготовка для самостоятельного упражнения для реализации проверки на alphnumeric

export type Value = string | number | boolean;

export type ValidationResult = Error | undefined;

export type ValidatorFunc = (value: Value, key: string) => ValidationResult;

export const isNotEmpty: ValidatorFunc = (value, key) => {
  let isValid = true;

  switch (typeof value) {
    // numbers or bools have the value implicitly
    case "number":
    case "boolean":
    case "bigint":
      isValid = true;
      break;
    case "object":
    case "function":
    case "undefined":
    case "symbol":
      // Checking for null and undefined
      isValid = value != null;
      break;
    case "string":
      isValid = value !== "";
      break;
    default:
      // Thruthy fallback
      isValid = !!value;
      break;
  }

  if (isValid) {
    return undefined;
  }

  return new Error(`${key} is required`);
};

// Оставлено намеренно чтобы достать оттуда логику второй валидации

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

//     let isValid = true;

//     switch (typeof value) {
//       // numbers or bools have the value implicitly
//       case "number":
//       case "boolean":
//       case "bigint":
//         isValid = true;
//         break;
//       case "object":
//       case "function":
//       case "undefined":
//       case "symbol":
//         // Checking for null and undefined
//         isValid = value != null;
//         break;
//       case "string":
//         isValid = value !== "";
//         break;
//       default:
//         // Thruthy fallback
//         isValid = !!value;
//         break;
//     }

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
