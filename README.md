# Utilities

This utilities functions aims to share and re-used useful typed utilities functions I came accross.

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
function flatten(deepArray: Array<any>): Array<any>;
```

## Built with

- [tsdx](https://github.com/jaredpalmer/tsdx)

## Versionning

This tool use [SemVer](http://semver.org/) for versioning.

## Licence

MIT
