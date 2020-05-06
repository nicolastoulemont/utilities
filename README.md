# Utilities

This utilities functions aims to share and re-use useful typed utilities functions I came accross.

## Disclaimer

This is a work in progress tool and mainly aimed at my personal use accross my projects.

## Installation

```bash
npm install @nicolastoulemont/utilities
or
yarn add @nicolastoulemont/utilities
```

## Functions

#### Colors

- randomHex()

```typescript
function randomHex(): string;
```

- isHex()

```typescript
function isHex(hex: string): boolean;
```

- isRgb()

```typescript
function isRgb({ r: number, g: number, b: number }): boolean;
```

- hexToRgb()

```typescript
function hexToRgb(hex: string): { r: number; g: number; b: number };
```

- rgbToHex()

```typescript
function rgbToHex({ r: number, g: number, b: number }): string;
```

- colorBasedOnBg()

```typescript
function colorBasedOnBg(
  bgHex: string,
  lightColor: string,
  darkColor: string
): string;
```

#### Arrays

- flatten()

```typescript
function flatten<T>(deepArray: Array<T>): Array<T>;
```

- arrayToRecord()

```typescript
function arrayToRecord<T extends { [key: string]: any }>(
  array: Array<T>,
  key: string
): Record<string, T>;
```

#### Other Data structures

- Stack

```typescript
const stack = new Stack<T>()
stack.push(value: T)
stack.pop(): T
stack.peek(): T
```

- Queue

```typescript
const queue = new Queue<T>()
queue.enqueue(value: T)
queue.dequeue()
queue.peek(): T
```

- LinkedList

```typescript
const list = new LinkedList<T>()
list.insertFirst(data: T)
list.insertLast(data: T)
list.insertAt(data: T, index: number)
list.getAt(index: number): T | null
list.removeAt(index: number)
list.clearList()
list.getListAsArray(): Array<T>
list.printList()
```

- HashTable

```typescript
const hashTable = new HashTable<T>(size:number)
hashTable.insert(key:string, value: T)
hashTable.get(key:string) T | null
hashTable.remove(key:string)
```

#### Misc

- randomString()

```typescript
function randomString(): string;
```

## Built with

- [tsdx](https://github.com/jaredpalmer/tsdx)

## Versionning

This tool use [SemVer](http://semver.org/) for versioning.

## Licence

MIT
