# ember-convert-units

A simple Ember addon for converting between units.

## Table of Contents

- [Installing](#installing)
- [Usage](#usage)
- [Supported Units](#supported-units)

## Installing

Run this command in your project

```
ember install ember-convert-units
```

## Usage

This addon can be used in two ways

- [Pure Function](#pure-function)
- [Template Helper](#template-helper)


### Pure Function

```js
/*
 @param {number} quantity
 @param {string} units
 @param {string} newUnits
 @returns {number} The quantity expressed in the new units
*/

function convertUnits(quantity, units, { to: newUnits }) { ... }
```

Example

```js
import { convertUnits } from 'ember-convert-units';

convertUnits(2, 'pounds', { to: 'grams' }); // 907.18474
convertUnits(5, 'mi', { to: 'km' }); // 8.04672
```

### Template Helper

```hbs
{{!--
  @param {number} quantity
  @param {string} units
  @param {string} newUnits 
  @returns {number} The quantity expressed in the new units
--}}

{{convert-units quantity units to=newUnits}}
```

Example

```hbs
{{convert-units 2 'pounds' to='grams'}} grams
{{convert-units 5 'mi' to='km'}} km
```

generates the text

```html
907.18474 grams
8.04672 km
```

## Supported Units

For more details see [register-units.js](./addon/register-units.js).

### Length

Unit                  | Names
----------------------|---------------------------------------
Nanometers            | nanometres, nanometers, nm
Micrometers           | micrometres, micrometers, μm
Millimeters           | millimetres, millimeters, mm
Centimeters           | centimetres, centimeters, cm
Meters                | metres, meters, m
Kilometers            | kilometres, kilometers, km
Inches                | inches, in
Feet                  | feet, ft
Yards                 | yards, yd
Miles                 | miles, mi

### Area

Unit                  | Names
----------------------|---------------------------------------
Square Millimeters    | square millimetres, square millimeters, sq mm
Square Centimeters    | square centimetres, square centimeters, sq cm
Square Meters         | square metres, square meters, sq m
Hectares              | hectares, ha
Square Kilometers     | square kilometres, square kilometers, sq km
Square Inches         | square inches, sq in
Square Feet           | square feet, sq ft
Acres                 | acres, acre
Square Mile           | square mile, sq mi

### Mass

Unit                  | Names
----------------------|---------------------------------------
Micrograms            | micrograms, μg
Milligrams            | milligrams, mg
Grams                 | grams, g
Killograms            | kilograms, kg
Tonnes                | tonnes, metric ton
Tons (US)             | tons, ton
Ounces                | ounces, oz
Pounds                | pounds, lb

### Time

Unit                  | Names
----------------------|---------------------------------------
Nanoseconds           | nanoseconds, ns
Microseconds          | microseconds, µs
Milliseconds          | milliseconds, ms
Seconds               | seconds, s
Minutes               | minutes, min
Hours                 | hours, h

### Temperature

Unit                  | Names
----------------------|---------------------------------------
degrees Fahrenheit    | degrees Fahrenheit, deg F, fahrenheit
degrees Celsius       | degrees Celsius, deg C, celsius
Kelvin                | kelvin

### Speed

Unit                  | Names
----------------------|---------------------------------------
Meters per Second     | m/s
Meters per Hour       | m/h
Kilometers per Hour   | km/h, kph
Feet per Second       | ft/s
Feet per Hour         | ft/h
Miles per Hour        | mi/h, mph

### Pressure

Unit                  | Names
----------------------|---------------------------------------
Nanopascals           | nanopascals, npa
Micropascals          | micropascals, μpa
Millipascals          | millipascals, mpa
Centipascals          | centipascals, cpa
Pascals               | pascals, pa
Kilopascals           | kilopascals, kpa
Nanobars              | nanobars, nbar
Microbars             | microbars, μbar
Millibars             | millibars, mbar
Centibars             | centibars, cbar
Bars                  | bars, bar
Kilobars              | kilobars, kbar
Pounds per Square Inch| psi
Atmosphere            | atmosphere, at

### Volume

Unit                  | Names
----------------------|---------------------------------------
Litres                | litres, liters, L, l
Millilitres           | millilitres, milliliters, ml, mL
Gallons               | gallons, gal
Quart                 | quart, qt
Pint                  | pint, pt
Fluid Ounces          | fluid ounces, fl oz
Acre Inch             | acre inch, acre in, acre&ast;in, acre&ast;inch
Acre Foot             | acre foot, acre ft, acre&ast;ft, acre&ast;foot

### Not currently supported

- Digital Storage
- Data Transfer Rate

Feel free to contribute new units if you need them!
