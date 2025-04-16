import { describe, it, expect } from "vitest";
import { getStyleByDifficulty } from "../utils/styleHelpers";

describe("getStyleByDifficulty", () => {
  it('returns the correct style for "Easy"', () => {
    expect(getStyleByDifficulty("Easy")).toBe(
      "border-custom-green bg-custom-light-green text-custom-green"
    );
  });

  it('returns the correct style for "Medium"', () => {
    expect(getStyleByDifficulty("Medium")).toBe(
      "border-custom-orange bg-custom-light-orange text-custom-orange"
    );
  });

  it('returns the correct style for "Hard"', () => {
    expect(getStyleByDifficulty("Hard")).toBe(
      "border-custom-red bg-custom-light-red text-custom-red"
    );
  });

  it("returns an empty object for unknown difficulty", () => {
    expect(getStyleByDifficulty("Unknown")).toEqual({});
  });

  it('handles whitespace (e.g., " Easy ")', () => {
    expect(getStyleByDifficulty(" Easy ")).toBe(
      "border-custom-green bg-custom-light-green text-custom-green"
    );
  });

  it("returns empty object for whitespace-only input", () => {
    expect(getStyleByDifficulty("   ")).toEqual({});
  });
});
