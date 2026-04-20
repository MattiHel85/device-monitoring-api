import { healthCheck } from "../src/index";
import { describe, expect, it } from "@jest/globals";

describe("Health check", () => {
  it("should return OK", () => {
    expect(healthCheck()).toBe("OK");
  });
});