import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing the handle submit functionality", () => {
    test("Handle Submit should not return an error", () => {
      expect(handleSubmit).toBeDefined();
    });
});