import { expect } from "chai";
import sayMyName from "../lib.ts";
describe("lib", function () {
  describe("#sayMyName()", function () {
    it("should return a thumbs up for the right name", function () {
      expect(sayMyName("Heisenberg")).to.eq("You're right 👍");
    });

    it("should return a thumbs down for the wrong name", function () {
      expect(sayMyName("Walter")).to.eq("You're wrong 👎");
    });
  });
});
