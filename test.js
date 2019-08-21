(async () => {
  async function test() {
    // new syntax testing
  }

  // test of new loops
  for (const user of []) {
    test(user);
  }

  for await (const user of []) {
    test(user);
  }
})();
