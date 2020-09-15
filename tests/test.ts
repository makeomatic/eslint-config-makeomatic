(async () => {
  async function test(user: any) {
    // new syntax testing
    console.info(user) // eslint-disable-line no-console
  }

  // test of new loops
  for (const user of []) {
    test(user)
  }

  for await (const user of []) {
    test(user)
  }
})()
