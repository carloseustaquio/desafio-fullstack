import { Validation } from "../Validation"

const data = {
  a: "a",
  b: "b",
  c: "c",
}

describe("Validation helper", () => {
  it("should throw an error if required fields are not respected", () => {
    expect(() => Validation.validateFields(data, ["a", "b", "c", "d"]))
      .toThrow("Missing fields: d.")
  })

  it("should return multiple missing fields separated by comma if multiple required fields are not respected", () => {
    expect(() => Validation.validateFields(data, ["a", "b", "c", "d", "e"]))
      .toThrow("Missing fields: d, e.")
  })

  it("should not throw if required fields have been passed", () => {
    expect(() => Validation.validateFields(data, ["a", "b", "c"]))
      .not.toThrow()
  })
})