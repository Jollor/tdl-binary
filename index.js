import { existsSync } from 'fs'
import { dirname } from 'path'

module.exports = () => {
  const cwd = dirname(require.main.filename)
  const lib_path = `${cwd}/bin/${os.platform()}-${os.arch()}`

  if (existsSync(lib_path)) {
    return lib_path
  }

  return null
}