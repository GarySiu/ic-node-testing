# Testing demo for node

1. `git clone` the project
2. `cd` to the project directory
3. Run `npm install`. npm will read the package.json file in this directory. It will locally create a node_modules folder and download external dependencies. This folder does not need to be uploaded to github so it is excluded by the .gitignore file.
4. To run tests use `npm test`. There are some tests written already. Some will pass, some will fail and some are pending.

    Under the hood this runs `mocha specs --require specs/helpers/chai.js --reporter spec`. You can change this in the  `package.json` file under the test script. For more settings check out the [Mocha homepage](https://mochajs.org/). `specs/helpers/chai.js` is some configuration Mocha needs before every test to use Chai.

## What is Mocha/Chai/Nock?

These are a set of testing tools or a "test suite". *Mocha* coordinates the running of the tests. *Chai* handles the language we use to describe our tests. It lets us compare values in a number of ways. *Nock* helps create mock server responses to make sure everything is working, even if we're working offline. This makes the tests run much quicker since you don't need to wait for Coposition to respond. It also saves us from spamming Coposition with empty test devices every time we run our tests.

Websites:
[Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [Nock](https://github.com/node-nock/nock)

## How is the app structured?

- `server.js` is our main file and the one you run using the t2 commandline tool. It's main job is to glue all our functionality together.
- `lib` is our library folder where we keep our local dependencies. Instead of having 1 giant object/function that does everything, we split our code up into seperate modules. This makes it easier for us to test, debug and reuse. It also means if we don't need the code, we don't load it.
- `specs` is where we keep our specification or test files. For every module in lib, we will have a matching file in specs. By convention, the spec files are named `module.spec.js` to differentiate them from the module files. The goal is to have every public method/function of every module tested.

## Why do the http functions/tests use callbacks?

Node is asynchronous. As you make the http request, node will continue to execute. This is great for performance but you need to adapt your programming style, otherwise your test will run and fail before the request can complete.

## Why bother?

1. It forces you to specify exactly what your code does. This makes it much easier to write.
2. It breaks down larger, abstract problems into smaller steps.
2. It's a form of documentation that is always up to date.
3. It makes it easier to pinpoint and fix bugs.
4. You instantly know when new code breaks your old code.
5. It looks good on your CV and a skill that's highly in demand.

Further reading on [unit tests](https://en.wikipedia.org/wiki/Unit_testing) and [test driven development](https://en.wikipedia.org/wiki/Test-driven_development).

## What next?

1. Try running the sample app with `npm start`. It will error out. Fix the error.
2. Try getting all the tests to pass.
3. Write some tests of your own.
4. Port existing functionality to this format.
5. If there is enough code to reuse in another project, try publishing the module to npm.
6. Set up your own test suite for the Arduino project.
