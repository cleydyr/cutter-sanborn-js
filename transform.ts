import fs from "fs";

import readline from "readline";

const outputFileName = "./src/table.ts";

fs.writeFileSync(outputFileName, "export default `");

const reader = readline.createInterface({
  input: fs.createReadStream("cutter.csv"),
});

reader.on("line", (line) => {
  fs.writeFileSync(outputFileName, `${line}\n`, { flag: "a" });
});

reader.on("close", () => {
  fs.writeFileSync(outputFileName, "`;", { flag: "a" });
});
