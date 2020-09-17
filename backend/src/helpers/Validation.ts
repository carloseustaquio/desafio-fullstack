export class Validation {
  static validateFields(data: any, requiredFields: Array<any>) {
    const missingFields = requiredFields.filter(requiredField => {
      // check for falsy values except 'false' (boolen)
      if (data[requiredField] || data[requiredField] === false) { return }
      else { return requiredField }
    })

    if (missingFields.length) {
      throw new Error(`Missing fields: ${missingFields.join(", ")}.`)
    }
  }
}