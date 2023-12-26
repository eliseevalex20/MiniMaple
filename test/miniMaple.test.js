import { MiniMaple } from "../src/miniMaple";

test("test * and ^", () => {
  const polynomial = "4*x^3";
  const variable = "x";
  const derivative = MiniMaple.differentiate(polynomial, variable);
  expect(derivative).toBe("12*x^2");
});

test("test var y", () => {
  const polynomial = "4*x^3";
  const variable = "y";
  const derivative = MiniMaple.differentiate(polynomial, variable);
  expect(derivative).toBe("0");
});

test("test -", () => {
  const polynomial = "4*x^3-x^2";
  const variable = "x";
  const derivative = MiniMaple.differentiate(polynomial, variable);
  expect(derivative).toBe("12*x^2-2*x");
});

test("test num", () => {
  const polynomial = "42";
  const variable = "x";
  const derivative = MiniMaple.differentiate(polynomial, variable);
  expect(derivative).toBe("0");
});

test("test err", () => {
  const polynomial = "4*x/3";
  const variable = "x";
  expect(() => MiniMaple.differentiate(polynomial, variable)).toThrow(Error);
});
