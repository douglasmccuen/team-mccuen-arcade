import { exec } from 'child_process'
import { processExitChannel } from './constants'
import callback from './processCallback'

const openMame = ({game, mamePath, mameExec}, cb) => {
  const cmd = `cd ${mamePath}; ./${mameExec} ${game}`
  const options = {}
  return exec(cmd, options, cb)
}

const openWindow = (browserWindow) => (props) => {
  const process = openMame(props, callback(browserWindow.webContents))
  process.on('exit', (code) => {
    browserWindow.webContents.send(processExitChannel(process.pid), code)
    browserWindow.setFullScreen(true)
  })
  return Promise.resolve(process)
}

export default openWindow
