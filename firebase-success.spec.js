const firebase = require("firebase");
require("firebase/auth");

firebase.initializeApp({
  apiKey: "firebase-msw-example",
  projectId: "firebase-msw-example",
});

const clientAuth = firebase.auth();
clientAuth.useEmulator("http://localhost:9099");

async function createUser() {
  const now = Date.now();
  const email = `${now}@test.tld`;
  return firebase.auth().createUserWithEmailAndPassword(email, "asdasdasd");
}

describe("firebase auth", () => {
  it("succeeds", async () => {
    const { user } = await createUser();

    expect(user).toMatchObject({
      email: expect.any(String),
    });
  });
});
