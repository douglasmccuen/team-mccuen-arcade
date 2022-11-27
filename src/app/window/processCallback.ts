/* eslint @typescript-eslint/no-unused-vars: 0 */
import {  ExecException } from 'child_process'
import { WebContents } from 'electron'
import { errorChannel } from './constants'
import { Callback } from './types'

const callback = (web: WebContents):Callback =>
  (error: ExecException|null /* , stdout: string, stderr: string */ ):void => {
    if (error) {
      web.send(errorChannel, error.message)
    }
    // NOTE: the script being called doesn't return a buffer, so stdout and stderr will be strings
    // Perhaps calling mame directly will result in a buffer.
    /*
    stdout.on('data', (data) => {
      console.log(data.toString());
    })

    stderr.on('data', (data) => {
      console.error(data.toString());
    })
    */
    // console.log(stdout)
    // console.log(stderr)
  }

export default callback
