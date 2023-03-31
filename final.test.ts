import { describe, test, expect } from "vitest";
import strCalulator from "./final";

describe("bonus cases", () => {
  test("integers larger then 1000 should be ignored", () => {
    const result = strCalulator("//;\n1;3;4;1001");
    expect(result).toBe(8);
  });
  test("integers equal or smaller than 1000 are valid", () => {
    const result = strCalulator("//;\n1;3;4;1000");
    expect(result).toBe(1008);
  });
  test("integers smaller then 1000 are valid", () => {
    const result = strCalulator("//;\n1;3;4;999");
    expect(result).toBe(1007);
  });
  test("Delimiters can be arbitrary length", () => {
    const result = strCalulator("//***\n1***2***3");
    expect(result).toBe(6);
  });

  test("Allow for multiple delimiters", () => {
    const result = strCalulator("//$,@\n1$2@3");
    expect(result).toBe(6);
  });
  test("Allow multiple delimiters of arbitrary length", () => {
    const result = strCalulator("//$,@\n1$2@3***\n1***2***3");
    expect(result).toBe(12);
  });
  test("should return [-2] with Error", () => {
    expect(() => strCalulator("//@\n-2@3@8")).toThrow(
      new Error("Negatives not allowed: -2")
    );
  });
});
