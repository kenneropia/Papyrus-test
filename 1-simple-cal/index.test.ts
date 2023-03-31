import { describe, test, expect } from "vitest";
import strCalulator from ".";

describe("correct input", () => {
  test("should return 6", () => {
    const result = strCalulator("1,2,3");
    expect(result).toBe(6);
  });
  test("should return 10", () => {
    const result = strCalulator("2,3,5");
    expect(result).toBe(10);
  });
});

describe("empty input", () => {
  test("should return zero", () => {
    const result = strCalulator("");
    expect(result).toBe(0);
  });
});
