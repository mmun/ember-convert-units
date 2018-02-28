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
registerUnit(['kilometres', 'kilometers', 'km'], Unit.scale(1e3, meters));

let inches = Unit.scale(0.0254, meters);
registerUnit(['inches', 'in'], inches);
registerUnit(['feet', 'ft'], Unit.scale(12, inches));
registerUnit(['yards', 'yd'], Unit.scale(36, inches));
registerUnit(['miles', 'mi'], Unit.scale(63360, inches));

// Mass

let grams = Unit.root();
registerUnit(['milligrams', 'mg'], Unit.scale(1e-3, grams));
registerUnit(['grams', 'g'], grams);
registerUnit(['kilograms', 'kg'], Unit.scale(1e3, grams));
registerUnit(['tonnes'], Unit.scale(1e6, grams));

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

let kelvin = Unit.root();
registerUnit(['kelvin'], kelvin);

let celsius = Unit.offset(273.15, kelvin);
registerUnit(['degrees Celsius', 'deg C', 'celsius'], celsius);
registerUnit(
  ['degrees Fahrenheit', 'deg F', 'fahrenheit'],
  Unit.scaleAndOffset(5 / 9, -160 / 9, celsius)
);

// Speed

let meterspersecond = Unit.root();
registerUnit(['m/s'], meterspersecond);
registerUnit(['m/h'], Unit.scale(1 / 3600, meterspersecond));
registerUnit(['km/h', 'kph'], Unit.scale(1 / 3.6, meterspersecond));

let feetpersecond = Unit.scale(0.3048, meterspersecond);
registerUnit(['ft/s'], feetpersecond);
registerUnit(['ft/h'], Unit.scale(1 / 3600, feetpersecond));
registerUnit(['mi/h', 'mph'], Unit.scale(1.46667, feetpersecond));

// Pressure

let pascals = Unit.root();
registerUnit(['nanopascals', 'npa'], Unit.scale(1e-9, pascals));
registerUnit(['micropascals', 'μpa'], Unit.scale(1e-6, pascals));
registerUnit(['millipascals', 'mpa'], Unit.scale(1e-3, pascals));
registerUnit(['centipascals', 'cpa'], Unit.scale(1e-2, pascals));
registerUnit(['pascals', 'pa'], pascals);
registerUnit(['kilopascals', 'kpa'], Unit.scale(1e3, pascals));

let bar = Unit.scale(1e5, pascals);
registerUnit(['nanobars', 'nbar'], Unit.scale(1e-9, bar));
registerUnit(['microbars', 'μbar'], Unit.scale(1e-6, bar));
registerUnit(['millibars', 'mbar'], Unit.scale(1e-3, bar));
registerUnit(['centibars', 'cbar'], Unit.scale(1e-2, bar));
registerUnit(['bar', 'ba'], bar);
registerUnit(['kilobars', 'kbar'], Unit.scale(1e3, bar));

let psi = Unit.scale(6.89476e3, pascals);
registerUnit(['psi'], psi);

let atmosphere = Unit.scale(101325, pascals);
registerUnit(['atmosphere', 'at'], atmosphere);

// Volume

let liters = Unit.root();
registerUnit(['litres', 'liters', 'L', 'l'], liters);
registerUnit(['millilitres', 'milliliters', 'ml', 'mL'], Unit.scale(1e-3, liters));
registerUnit(['gallons', 'gal'], Unit.scale(3.78541, liters));
registerUnit(['quart', 'qt'], Unit.scale(0.946353, liters));
registerUnit(['pint', 'pt'], Unit.scale(0.473176, liters));
registerUnit(['fluid ounces', 'floz'], Unit.scale(0.0295735, liters));
registerUnit(['acre inch', 'acre in', 'acre*in', 'acre*inch'], Unit.scale(102790.15461, liters));
registerUnit(['acre foor', 'acre ft', 'acre*ft', 'acre*foot'], Unit.scale(1233480.22, liters));
