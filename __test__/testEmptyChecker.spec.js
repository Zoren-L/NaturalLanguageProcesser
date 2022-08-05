import { checkIsNotEmpty } from "../src/client/js/emptyChecker"

describe("Testing the check if empty functionality", () => {
    test("It should return true that the input value is not empty", () => {
      // actual test
      let input = 'this is a real sentence';
      expect(checkIsNotEmpty(input)).toEqual(true);
    });
});