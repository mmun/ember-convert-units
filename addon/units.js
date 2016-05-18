let units = Object.create(null);

export function registerUnit(names, unit) {
  names.forEach(name => {
    if (units[name]) {
      throw new Error(`Multiple unit definitions for ${name}`);
    } else {
      units[name] = unit;
    }
  });
}

export function convertUnits(quantity, sourceUnitName, { to: targetUnitName, strict }) {
  if (arguments.length !== 3) {
    throw new Error(`convertUnits expects 3 arguments`);
  }

  let source = units[sourceUnitName];
  let target = units[targetUnitName];

  if (!source) {
    throw new Error(`Unknown source unit ${sourceUnitName}`);
  }

  if (!target) {
    throw new Error(`Unknown target unit ${targetUnitName}`);
  }

  if (source.root !== target.root) {
    throw new Error(`Cannot convert between ${sourceUnitName} and ${targetUnitName}`);
  }

  if (strict !== false) {
    if (typeof quantity !== 'number') {
      if (strict === true) {
        throw new Error(`Cannot convert quantity of type ${typeof quantity} in strict mode`);
      } else {
        return NaN;
      }
    }
  }

  return _convert(quantity, source, target);
}

function _convert(quantity, source, target) {
  if (source === target) {
    return quantity;
  } else if (source.depth > target.depth) {
    return _convert(source.toParent(quantity), source.parent, target);
  } else if (target.depth > source.depth) {
    return target.fromParent(_convert(quantity, source, target.parent));
  } else {
    return target.fromParent(_convert(source.toParent(quantity), source.parent, target.parent))
  }
}

export class Unit {
  static root() {
    return new Unit();
  }

  static scale(factor, unit) {
    return new AffineScaledUnit(unit, factor, 0);
  }

  static scaleAndOffset(factor, offset, unit) {
    return new AffineScaledUnit(unit, factor, offset);
  }

  constructor(parent) {
    if (parent) {
      this.parent = parent;
      this.root = parent.root;
      this.depth = parent.depth + 1;
    } else {
      this.parent = null;
      this.root = this;
      this.depth = 0;
    }
  }
}

class AffineScaledUnit extends Unit {
  constructor(parent, factor, offset) {
    super(parent);

    this.factor = factor;
    this.offset = offset;
  }

  toParent(quantity) {
    return quantity * this.factor + this.offset;
  }

  fromParent(quantity) {
    return (quantity - this.offset) / this.factor;
  }
}
