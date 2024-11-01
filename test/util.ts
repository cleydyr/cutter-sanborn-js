export interface TestCase {
  surname: string;
  name: string;
  expected: number;
}

export function loadTestCasesFromCSV(csv: string): TestCase[] {
  return csv
    .split("\n")
    .map((line) => line.split(","))
    .map(([surname, name, expected]) => ({
      surname,
      name,
      expected: Number(expected),
    }));
}
