import { mock, test } from "node:test";
import assert from "node:assert";

test("synchronous passing test", (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});

test("asynchronous passing test", async (t) => {
  // This test passes because the Promise returned by the async
  // function is settled and not rejected.
  assert.strictEqual(1, 1);
});

test("passing test using Promises", (t) => {
  // Promises can be used directly as well.
  return new Promise((resolve, reject) => {
    setImmediate(() => {
      resolve("hi");
    });
  });
});

test("top level test", async (t) => {
  await t.test("subtest 1", (t) => {
    assert.strictEqual(1, 1);
  });

  await t.test("subtest 2", (t) => {
    assert.strictEqual(2, 2);
  });
});
