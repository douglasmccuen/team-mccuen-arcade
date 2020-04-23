import { exec } from 'child_process'

const openMame = ({game, mamePath, mameExec}, cb) => {
  const cmd = `cd ${mamePath}; ./${mameExec} ${game}`
  const options = {}
  return exec(cmd, options, cb)
}

export default openMame
