import { describe, test, expect } from "vitest";
import strCalulator from ".";

describe("added '\\n' to list of vaild input", () => {
  test("should return 6", () => {
    const result = strCalulator("1,\n,2,3");
    expect(result).toBe(6);
  });
  test("should return 10", () => {
    const result = strCalulator("\n2,3,5");
    expect(result).toBe(10);
  });
});
