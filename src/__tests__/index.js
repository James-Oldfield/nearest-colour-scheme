import { expect } from 'chai';
import { findNearestColourScheme } from '../index';
import cs from './testColourSchemes.js';
const {describe, it} = global;

describe('find best palette for [255, 255, 255]', () => {
  it('should return an array of the best matching colours, ordered based on most similar colour', async () => {
    const result = await findNearestColourScheme( [ 255, 255, 255 ], cs );

    expect(result[0].toString()).to.be.equal([ 239, 239, 239 ].toString());
    expect(result[1].toString()).to.be.equal([ 211, 219, 209 ].toString());
    expect(result[5].toString()).to.be.equal([ 201, 147, 68 ].toString());
  });
});


describe('find best palette for [255, 99, 71]', () => {
  it('should return an array of the best matching colours, ordered based on most similar colour', async () => {
    const result = await findNearestColourScheme( [ 255, 99, 71 ], cs );

    expect(result[0].toString()).to.be.equal([ 179, 54, 75 ].toString());
    expect(result[1].toString()).to.be.equal([ 134, 62, 80 ].toString());
    expect(result[5].toString()).to.be.equal([ 151, 183, 212 ].toString());
  });
});
