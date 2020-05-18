export type Value = string | number | boolean;

export class Validator {
  errors: { [key: string]: Error } = {};
  values: { [key: string]: Value } = {};

  updateField(key: string, value: Value) {
    this.values[key] = value;
  }

  hasErrors() {
    let isValid = true;

    Object.keys(this.errors).forEach((key) => {
      if (this.errors[key]) {
        isValid = false;
      }
    });

    return !isValid;
  }

  checkIsNotEmpty(key: string) {
    const value = this.values[key];
    const isValid =
      typeof value !== "number" && typeof value !== "boolean" ? !!value : true;

    if (!isValid) {
      this.errors[key] = new Error(`${key} is required`);
    } else {
      delete this.errors[key];
    }
  }

  checkIsAlphanumeric(key: string) {
    const value = this.values[key];
    const isValid = /^[a-zA-Z0-9_]*$/.test(value.toString());

    if (!isValid) {
      this.errors[key] = new Error(`${key} must be alphanumeric`);
    } else {
      delete this.errors[key];
    }
  }
}
