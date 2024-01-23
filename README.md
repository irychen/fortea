<p align="center">
  <img width="180" src="./fortea.png" alt="Vite logo">
</p>



<p align="center">A comprehensive TypeScript function library offering a wide range of utilities.</p>

# fortea

[![NPM version](https://img.shields.io/npm/v/fortea.svg?style=flat)](https://npmjs.com/package/fortea) [![NPM downloads](https://img.shields.io/npm/dm/fortea.svg?style=flat)](https://npmjs.com/package/fortea)

## Description

some tools for js, save your time for a cup of tea ☕️!
`fortea` is a comprehensive TypeScript function library offering a wide range of utilities, from basic type checking to
JSON querying and encoding transformations. Below is a detailed guide on how to use some of the key functions in this
library.

## Features

- lightweight, zero dependencies 
- well tested, with huge test coverage
- easy to use, simple and clear API

## Current Tools List

<div style="width: 100%;display: flex">
  <div style="width: 50%;display: inline-block">
    <ul>
        <li>base64</li>
        <li>classNames</li>
        <li>delayAsync</li>
        <li>isBoolean</li>
        <li>isFunc</li>
        <li>isInteger</li>
        <li>isNil</li>
        <li>isNumber</li>
        <li>skipTake</li>
    </ul>
  </div>
 <div style="width: 50%;display: inline-block">
    <ul>
        <li>isObject</li>
        <li>isString</li>
        <li>map</li>
        <li>mergePath</li>
        <li>queryJsonStr</li>
        <li>toBoolean</li>
        <li>toNumber</li>
        <li>toPercentage</li>
    </ul>
  </div>
</div>

## Install

```bash
pnpm install fortea
```

## Function List

### 1. `forNumber`

- **Purpose**: Query a JSON string for a numeric value.
- **Parameters**:
    - `json`: String in JSON format.
    - `query`: String, the query expression.
- **Returns**: `number | null`, the queried number or `null`.
- **Examples**:
  ```typescript
  import { queryJsonStr } from 'fortea'
  
  const { forNumber } = queryJsonStr
  
  const result = forNumber('{"age": 30}', 'age');
  // result: 30

  const notFound = forNumber('{"name": "John"}', 'age');
  // notFound: null
  ```

### 2. `forString`

- **Purpose**: Query a JSON string for a string value.
- **Parameters**:
    - `json`: String in JSON format.
    - `query`: String, the query expression.
- **Returns**: `string | null`, the queried string or `null`.
- **Examples**:
  ```typescript
  import { queryJsonStr } from 'fortea'
  
  const { forString } = queryJsonStr
  
  const name = forString('{"name": "Alice"}', 'name');
  // name: "Alice"

  const notFound = forString('{"age": 30}', 'name');
  // notFound: null
  ```

### 3. `forBoolean`

- **Purpose**: Query a JSON string for a boolean value.
- **Parameters**:
    - `json`: String in JSON format.
    - `query`: String, the query expression.
- **Returns**: `boolean | null`, the queried boolean value or `null`.
- **Examples**:
  ```typescript
  const isActive = forBoolean('{"active": true}', 'active');
  // isActive: true

  const notFound = forBoolean('{"name": "John"}', 'active');
  // notFound: null
  ```

### 4. `base64`

- **Purpose**: Provides Base64 encoding and decoding functionality.
- **Methods**:
    - `encode(input: string): string` - Encodes a string to Base64.
    - `decode(input: string): string` - Decodes a Base64 encoded string.
- **Examples**:
  ```typescript
  const encoded = base64.encode('Hello World');
  // encoded: "SGVsbG8gV29ybGQ="

  const decoded = base64.decode('SGVsbG8gV29ybGQ=');
  // decoded: "Hello World"
  ```

### 5. `classNames`

- **Purpose**: Generates a CSS class name string based on the given arguments.
- **Parameters**: `...args: ClassNameItem[]` - An array of class name items.
- **Returns**: `string`, the generated class name string.
- **Examples**:
  ```typescript
  const classes = classNames('btn', 'btn-primary', { disabled: false });
  // classes: "btn btn-primary"

  const conditionalClasses = classNames('text', { bold: true, italic: false });
  // conditionalClasses: "text bold"
  ```

### 6. `delayAsync`

- **Purpose**: Asynchronously delays the execution of a function.
- **Parameters**: `seconds: number` - The number of seconds to delay.
- **Returns**: `Promise<void>`.
- **Examples**:
  ```typescript
  await delayAsync(2); // Delays for 2 seconds

  delayAsync(1).then(() => console.log('Delayed 1 second'));
  ```

### 7. `isNumber`

- **Purpose**: Checks if a value is a number.
- **Parameters**:
    - `value: any` - The value to check.
    - `skipFinite?: boolean` - Whether to skip the finite number check. default false
- **Returns**: `boolean`, `true` if the value is a number.
- **Examples**:
  ```typescript
  const isNum1 = isNumber(5);
  // isNum1: true
  const isNum2 = isNumber(Infinity, true);
  // isNum2: true
  const isNum3 = isNumber(Infinity, false);
  // isNum3: false
  ```

### 8. `toPercentage`

- **Purpose**: Converts a number to a percentage string.
- **Parameters**:
    - `value: number` - The input number.
    - `fixed?: number` - Fixed number of decimal places.
- **Returns**: `string`, the converted percentage string.
- **Examples**:
  ```typescript
  const percent = toPercentage(0.123);
  // percent: "12.3%"

  const fixedPercent = toPercentage(0.1234, 1);
  // fixedPercent: "12.3%"
  ```

---

