# Declaring JS Doc types via TypeScript

TypeScript Files can be used in JavaScript files' JsDocs.

### Write your Type Definitions as you normally would in TypeScript
```TypeScript
// typings.d.ts
export interface Car {
    wheels: number;
    // all other properties
}
```

### Reference them inside your JavaScripts JsDoc them via `import('my-typings')`
```JavaScript
// my-js-file.js

/**
 * @type {import('./typings').Car}
 */
const myCar = {
    wheels: 4,
    // ... rest
};
```

### Alternatively you can import your typings once per .js file and reference them:

```JavaScript
/**
 * @typedef {import('./typings').Driver} Driver
 */

/**
 * @type {Driver}
 */
const peter = {
    age: 30,
    name: 'Peter Arbeitsloser'
}
```
