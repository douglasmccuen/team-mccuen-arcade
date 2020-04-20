import { execFile } from 'child_process'
import config from '../../../configs/app.config'

// https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback

const openMame = (game, callback) => {
  const args = [game]
  const options = {}
  return execFile(config.openMame, args, options, callback)
}

export default openMame
