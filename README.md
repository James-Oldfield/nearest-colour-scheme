# nearest-colour-scheme

Find the most appropriate colour scheme and order given an input colour and set of colour palettes, based on Hunter Lab similarity.

---

## install

`npm i nearest-colour-scheme --save`

## usage 

```js
import { findNearestColourScheme } from 'findNearestColourScheme';

const arbitrarySchemes = [
  [
    // [0] = r, [1] = g, [2] = b
    [ 200, 198, 212 ],
    [ 228, 128, 178 ],
    [ 251, 222, 221 ],
    [ 72, 86, 128 ],
    [ 169, 58, 69 ],
    [ 177, 146, 157 ],
  ], [
    [ 50, 79, 82 ],
    [ 198, 108, 64 ],
    [ 201, 147, 68 ],
    [ 195, 173, 108 ],
    [ 119, 155, 143 ],
    [ 114, 116, 100 ],
  ], [
];

const myCol = [ 255, 99, 71 ];

const bestPalMatch = findNearestColourScheme( myCol, arbitrarySchemes );
```

## testing

To test for assertions:

`npm run testonly`
