# Testing

### Tests Execution

Tests are automatically executed on any PR as part of the CI/CD pipelines.
- Simple tests execution can be achieved by running the `yarn test` command.
- Running tests with code coverage is done by passing the `--coverage` flag to the base command `yarn test --coverage`.

### Structure

To make sure we can easily find the unit test files associated with a function or component, please put your test file next to the file that contains the function/component you're testing. E.g.:

```md
.
├── my-function.ts
├── my-function.test.ts
└── MyComponent
  ├── MyComponent.tsx
  └── MyComponent.test.tsx
```

Also make sure that it's clear what is tested in your test file. For your colleagues (and possibly yourself too) to understand what is tested, the suggested test file structure looks like this:

```js
// my-function.ts
function myFunction(args) {
  ...
}

export default myFunction;
```

```js
// my-function.test.ts

// Name of the component or function.
describe('myFunction', () => {
  it('do A', () => {
    // ...
  })

  it('do B', () => {
    // ...
  })
})
```

In case you have a single file with multiple functions, like helpers, this would be the suggested approach:

```js
// my-helpers.ts
export const getName = () => {...}

export const sum = () => {...}
```

```js
// my-helpers.test.ts

// Name of the file.
describe('my-helpers', () => {
  // Name of the function tested in this block.
  describe('getName', () => {
    it('do A', () => {
      // ...
    })

    it('do B', () => {
      // ...
    })
  })

  describe('sum', () => {
    it('do A', () => {
      // ...
    })

    it('do B', () => {
      // ...
    })
  })
})
```

### Basic Tests Runner and Helpers (TBA)
