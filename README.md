# Firebase MSW timeout example

To run:

1. `yarn`
2. `yarn test`

Two test suites should run, `firebase-success` and `msw-timeout`. Both suites are identical, with the expection of setting up `msw`. `msw` is set up with no handlers, and thus should be bypassed. Instead, the requests are processed and timeout.

To experiment with the tests, you can run `yarn emulate` and `yarn test:watch` separately. This will run the firebase emulator, and tests separately.
