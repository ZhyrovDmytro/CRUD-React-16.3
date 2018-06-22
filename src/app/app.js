import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */

import 'svgxuse';
import { render } from './render';
import Crud from './components/Crud';

const app = (config) => {
    render(Crud, document.querySelector('.root'));
};

app(window.config);
