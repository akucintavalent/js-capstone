import mountDOM from 'jsdom-mount';
import { readFileSync } from 'fs';
import fetch from 'cross-fetch';

import {showMoviesOnHomePage} from '../js/DOM-manipulations.js';

const html = readFileSync('src/index.html', 'utf8');
global.fetch = fetch;

describe('test items counter', () => {
  test('items counter should be 39', async () => {
    mountDOM(html);
    await showMoviesOnHomePage();
    const moviesLink = document.getElementById('movies');
    expect(moviesLink.innerText).toContain('(39)');
  });
});
