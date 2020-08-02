import { expect } from 'chai';
import * as plugin from '../src';

describe('flowed http library', () => {
  it('check exported fields', () => {
    const library = plugin;
    expect(Object.keys(library)).to.deep.equal(['resolverLibrary']);
  });
});
