/*
 * Tests some names for the expected call numbers
 */

import { TestCase } from "./util";

import { CutternSanbornTableFactory } from "../src/lib";
import { loadTestCasesFromCSV } from "./util";
import fs from "fs";

const csvContents = fs.readFileSync("test/tests.csv", "utf-8");

const testCases: TestCase[] = loadTestCasesFromCSV(csvContents);

const cutterSanbornTable = CutternSanbornTableFactory.createTable();

test.each(testCases)(
  "callNumber($surname, $name)",
  ({ surname, name, expected }) => {
    expect(cutterSanbornTable.callNumber(surname, name)).toBe(expected);
  }
);
