const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = () => {
  const cwd = path.resolve(__dirname)
  const lib_path = `${cwd}/bin/${os.platform()}-${os.arch()}/libtdjson.so.1.7.1`

  if (fs.existsSync(lib_path)) {
    return lib_path
  }

  return null
}