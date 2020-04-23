import { exec } from 'child_process'
import { processExitChannel } from './constants'
import callback from './processCallback'

const openMame = ({game, mamePath, mameExec}, cb) => {
  const cmd = `cd ${mamePath}; ./${mameExec} ${game}`
  const options = {}
  return exec(cmd, options, cb)
}

const openWindow = (web) => (props) => {
  const process = openMame(props, callback(web))
  process.on('exit', (code) => {
    web.send(processExitChannel(process.pid), code)
  })
  return Promise.resolve(process)
}

export default openWindow
