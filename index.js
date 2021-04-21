const fs = require('fs')
const path = require('path')
const os = require('os')

const VERSION = '1.7.3'

function getDistro() {
  const descr = fs.readFileSync('/etc/os-release', {encoding:'utf8', flag:'r'})
  const distro = descr.match(/[^A-Z_]+ID=(.*)/)
  return distro ? distro[1] : null
}

module.exports = () => {
  const cwd = path.resolve(__dirname)
  const lib_path = `${cwd}/bin/${getDistro()}-${os.platform()}-${os.arch()}/libtdjson.so.${VERSION}`
  if (fs.existsSync(lib_path)) {
    return lib_path
  }

  return null
}