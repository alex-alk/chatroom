import axios from "axios";
import * as apiCalls from "./apiCalls";

describe("apiCalls", () => {
  describe("signup", () => {
    it("calls /api/users", () => {
      const mockSignup = jest.fn();
      axios.post = mockSignup;
      apiCalls.signup();

      const path = mockSignup.mock.calls[0][0];
      expect(path).toBe("/api/users");
    });
  });
});
