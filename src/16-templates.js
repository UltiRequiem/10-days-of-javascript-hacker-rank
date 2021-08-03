function sides(literals, ...expressions) {
  const perimeter = expressions[1];

  const s1 =
    (perimeter + Math.sqrt(perimeter * perimeter - 16 * expressions[0])) / 4;
  const s2 =
    (perimeter - Math.sqrt(perimeter * perimeter - 16 * expressions[0])) / 4;

  return [s1, s2].sort((a, b) => a - b);
}
