import { describe, test, expect } from "vitest";
import strCalulator from ".";

describe("should throw error with array of negative integers", () => {
  test("should return [-3,-4] with Error", () => {
    // const result = strCalulator("//;\n1;-3;-4");
    expect(() => strCalulator("//;\n1;-3;-4")).toThrow(
      new Error("Negatives not allowed: -3,-4")
    );
  });
  test("should return [-2] with Error", () => {
    expect(() => strCalulator("//@\n-2@3@8")).toThrow(
      new Error("Negatives not allowed: -2")
    );
  });
});

describe("should support inputs without negatives", () => {
  test("should return 8", () => {
    const result = strCalulator("//;\n1;3;4");
    expect(result).toBe(8);
  });
  test("should return 13", () => {
    const result = strCalulator("//@\n2@3@8");
    expect(result).toBe(13);
  });
});
