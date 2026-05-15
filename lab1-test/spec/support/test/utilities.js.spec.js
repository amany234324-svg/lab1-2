const { removeDuplicates, stringReverse } = require("../../../utilities");

describe("Testing functions", () => {

  it("removeDuplicates returns array", () => {
    expect(Array.isArray(removeDuplicates([1,1,2]))).toBeTrue();
  });

  it("stringReverse works", () => {
    expect(stringReverse("Ali")).toBe("ilA");
  });

});