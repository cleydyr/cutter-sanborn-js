# cutter-sanborn-js

A library for the Cutter-Sanborn call number system written in Javascript.

## Usage

```javascript
import { CutternSanbornTableFactory } from "cutter-sanborn-js";

const cutterSanbornTable = CutternSanbornTableFactory.createTable();

cutterSanbornTable.callNumber("lentino", "noemia") === 574; // true
cutterSanbornTable.callNumber("prado", "heloisa") === 896; // true
```

## Testing

To run the tests for this library, use the following command:

```bash
npm run test
```
