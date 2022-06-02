import { expect } from "chai";
import sayMyName from "../lib.ts";

describe("lib", function () {
  describe("#sayMyName()", function () {
    it("should return a thumbs up for the right name", function () {
      expect(sayMyName("Heisenberg")).to.eq("You're right 👍");
    });
  });
});
