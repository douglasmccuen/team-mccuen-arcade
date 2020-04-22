import { exec } from 'child_process'

const openMame = ({game, mamePath, mameExec}, callback) => {
  const cmd = `cd ${mamePath}; ./${mameExec} ${game}`
  const options = {}
  return exec(cmd, options, callback)
}

export default openMame
