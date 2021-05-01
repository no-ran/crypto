/**
 * @jest-environment node
 */
import { withContracts } from "../neo-one/test";

describe("Token", () => {
  test("exists", async () => {
    await withContracts(async ({ token }) => {
      console.log("asdad");
      expect(token).toBeDefined();
    });
  });
});
