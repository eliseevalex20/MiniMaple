import * as math from 'mathjs';

class MiniMaple {
  static differentiate(expression, variable) {
    const invalidOperators = expression.match(/[^+\-\*\^0-9a-zA-Z\s]/);
    if (invalidOperators) {
      throw new Error("Invalid operations in the polynomial");
    }
    const x = math.parse(variable);
    const polyExpression = math.parse(expression);
    const derivative = math.derivative(polyExpression, x);
    return derivative.toString().replace(/\s/g, "");
  }
}
export { MiniMaple };
