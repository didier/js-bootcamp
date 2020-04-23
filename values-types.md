# III — Values and Types

## What is a type?

A type is essentially a unit in which a piece of data is represented.

JavaScript is a loosely typed language. A variable can be of any type, and when reassinged, can be changed to any other type.

from the official [MDN Docs](https://https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures):

```js
let foo = 42; // foo is a Number

foo = 'bar'; // foo is now a String
foo = true; // foo is now a Boolean
```

i

## The different types

The latest ECMAScript standard includes 9 types.

### Primitive (Immutable) Types

#### undefined — `typeof instance === "undefined"`

A variable that has not been assigned
has the value of `undefined`

#### Null — `typeof instance === "object"`

The Null type has only one value, `null`. Which, in layman terms, means nothing.

- Boolean — `typeof instance === "boolean"`
- Number — `typeof instance === "number"`
- String — `typeof instance === "string"`
- BigInt — `typeof instance === "bigint"`
- Symbol — `typeof instance === "symbol"`

### Objects

- null — `typeof instance === "object"`
- Object — `typeof instance === "object"`
