import { rgb } from 'color-space';

// Lab colour schemes.
let lcs = [];

/**
 * Function to find best colour match within a set of colour schemes, via Hunter Lab Euclidean distance.
 * @param colour The colour object which is needing matching.
 * @param cs An array of arbitrary colour schemes to search.
 */
const findNearestColourScheme = ( col, pals ) => {
  /**
   * Computes the 3D Euclidean distance of two colour arrays (e.g. [255,255,255])
   * @param c1 The first colour to compare
   * @param c2 The second colour to compare
   */
  const compute3DEDist = (c1, c2) => Math.sqrt( Math.pow(c1[0] - c2[0], 2) + Math.pow(c1[1] - c2[1], 2) + Math.pow(c1[2] - c2[2], 2) );
  /**
   * @param userCol The current user-selected colour in h-lab which is needing matching to a colour scheme.
   */
  const findBestMatch = userCol => {
    let bm = {
      schemeInd: 0,
      colourInd: 0,
      distance: Number.MAX_SAFE_INTEGER,
    };

    // For each colour in each colour scheme, calculate the lowest 3d eud distance of each colour and user's selected colour.
    lcs.forEach((scheme, si) => {
      scheme.forEach((c, ci) => {
        let n = compute3DEDist(userCol, c);

        if ( n < bm.distance ) {
          bm.schemeInd = si;
          bm.colourInd = ci;
          bm.distance = n;
        }
      });
    });

    // Returns the sorted palette with the most prominent match being first index.
    return pals[bm.schemeInd].map( (c, key) => pals[bm.schemeInd][(key + bm.colourInd) % pals.length] );
  };

  // map the RGB representations of all the colours in all schemes to hunter lab representations.
  pals.forEach(scheme => lcs = [ ...lcs, scheme.map( c => rgb.labh([ c[0], c[1], c[2] ]) ) ] );

  // Compute hunter lab rep of selected colour and then find the best scheme match
  return findBestMatch( rgb.labh([ col[0], col[1], col[2] ]) );
};

export default findNearestColourScheme;

export { findNearestColourScheme };
