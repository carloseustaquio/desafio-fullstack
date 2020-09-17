import { ValidationError } from "@src/util/errors/ValidationError"

export class Validation {
  static validateFields(data: any, requiredFields: Array<any>) {
    const missingFields = requiredFields.filter(requiredField => {

      // check for falsy values except 'false' (boolen)
      if (data[requiredField] || data[requiredField] === false) { return }
      else { return requiredField }
    })

    if (missingFields.length) {
      throw new ValidationError(`Missing fields: ${missingFields.join(", ")}.`)
    }
  }
}