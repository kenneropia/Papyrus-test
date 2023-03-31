import { describe, test, expect } from "vitest";
import strCalulator from ".";

describe("should support a custom delimiter", () => {
  test("should return 8", () => {
    const result = strCalulator("//;\n1;3\n;4");
    expect(result).toBe(8);
  });
  test("should return 13", () => {
    const result = strCalulator("//@\n2@3@8");
    expect(result).toBe(13);
  });
});
