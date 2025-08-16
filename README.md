# cutter-sanborn-js

A library for the Cutter-Sanborn call number system written in Javascript.

## Installation

### NPM

```bash
npm install cutter-sanborn-js
```

### CDN

```html
<script src="https://unpkg.com/cutter-sanborn-js/dist/cutter-sanborn.min.js"></script>
```

## Usage

### ES Modules / Node.js

```javascript
import { CutterSanbornTableFactory } from "cutter-sanborn-js";

const cutterSanbornTable = CutterSanbornTableFactory.createTable();

cutterSanbornTable.callNumber("lentino", "noemia") === 574; // true
cutterSanbornTable.callNumber("prado", "heloisa") === 896; // true
```

### Browser (CDN)

```html
<script src="https://unpkg.com/cutter-sanborn-js/dist/cutter-sanborn.min.js"></script>
<script>
  const cutterSanbornTable =
    CutterSanborn.CutterSanbornTableFactory.createTable();

  console.log(cutterSanbornTable.callNumber("lentino", "noemia")); // 574
  console.log(cutterSanbornTable.callNumber("prado", "heloisa")); // 896
</script>
```

## Testing

To run the tests for this library, use the following command:

```bash
npm run test
```
