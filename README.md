# tdl-binary
Telegram library compiled for Ubuntu

# Usage
```
const getBinaryPath = require('tdl-binary')

const Client = require('tdl').Client
const client = new Client({
  apiId: __API_ID__,
  apiHash: __API_HASH__,
  binaryPath: getBinaryPath()
})
```
