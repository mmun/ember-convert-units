/**
 * Unit conversions have been derived from
 *
 *   - https://en.wikipedia.org/wiki/Conversion_of_units
 *   - https://www.google.ca/search?q=unit%20converter
 *
 */

import { Unit, registerUnit } from './units';

// Length

let meters = Unit.root();
registerUnit(['nanometres', 'nanometers', 'nm'], Unit.scale(1e-9, meters));
registerUnit(['micrometres', 'micrometers', 'μm'], Unit.scale(1e-6, meters));
registerUnit(['millimetres', 'millimeters', 'mm'], Unit.scale(1e-3, meters));
registerUnit(['centimetres', 'centimeters', 'cm'], Unit.scale(1e-2, meters));
registerUnit(['metres', 'meters', 'm'], meters);
registerUnit(['kilometres', 'kilometers', 'km'], Unit.scale(1e+3, meters));

let inches = Unit.scale(0.0254, meters);
registerUnit(['inches', 'in'], inches);
registerUnit(['feet', 'ft'], Unit.scale(12, inches));
registerUnit(['yards', 'yd'], Unit.scale(36, inches));
registerUnit(['miles', 'mi'], Unit.scale(63360, inches));

// Mass

let grams = Unit.root();
registerUnit(['milligrams', 'mg'], Unit.scale(1e-3, grams));
registerUnit(['grams', 'g'], grams);
registerUnit(['kilograms', 'kg'], Unit.scale(1e+3, grams));
registerUnit(['tonnes'], Unit.scale(1e+6, grams));

let ounces = Unit.scale(28.349523125, grams);
registerUnit(['ounces', 'oz'], ounces);
registerUnit(['pounds', 'lb'], Unit.scale(16, ounces));

// Time

let seconds = Unit.root();
registerUnit(['nanoseconds', 'ns'], Unit.scale(1e-9, seconds));
registerUnit(['microseconds', 'µs'], Unit.scale(1e-6, seconds));
registerUnit(['milliseconds', 'ms'], Unit.scale(1e-3, seconds));
registerUnit(['seconds', 's'], seconds);
registerUnit(['minutes', 'min'], Unit.scale(60, seconds));
registerUnit(['hours', 'h'], Unit.scale(3600, seconds));

// Temperature

let fahrenheit = Unit.root();
registerUnit(['degrees Fahrenheit', 'deg F'], fahrenheit);
registerUnit(['degrees Celsius', 'deg C'], Unit.scaleAndOffset(9/5, 32, fahrenheit));
