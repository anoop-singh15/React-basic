// Uses prevously build module

// Catches default export
import x from './6_module1.mjs';

console.log(x);


// to catch normal (Named) export
import {c,b,d} from './6_module1.mjs';
console.log(c,b,d);

