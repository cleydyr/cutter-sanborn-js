import * as cheerio from "cheerio";
import fs from "fs";

const NUMBER_OF_PAGES = 9;

// For each file in the prebuild/pages directory, we will extract the values
// and create a CSV file with the values
const allTuples: string[][] = [];

for (let i = 1; i <= NUMBER_OF_PAGES; i++) {
  const $ = cheerio.load(
    fs.readFileSync(`prebuild/pages/page-${i}.html`, "utf-8")
  );

  const values = $("pre > b")
    .map((_, el) => $(el).text())
    .get();

  const tuples = values
    .flatMap((value) => value.split("\n"))
    .map((line) => line.trim().replace(/\s+/g, " "))
    .filter((line) => line.length > 0)
    .map((line) => line.split(" "))
    .map((tuple) =>
      tuple.map((entry) => entry.replace(/[,.]$/g, "").toLowerCase())
    )
    .filter((tuple) => tuple[0].match(/[0-9]{1,3}/));

  allTuples.push(...tuples);
}

// Group by the numeric code of the tuple, which is the first position
const groupedTuples = allTuples.reduce((acc, tuple) => {
  const key = tuple[0];
  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(tuple.slice(1).join(" "));
  return acc;
}, {} as Record<string, string[]>);

// Save to a csv file
const csv = Object.entries(groupedTuples)
  .map(([key, values]) => `${key},${values.join(",")}`)
  .join("\n");

fs.writeFileSync(`cutter.csv`, csv);
