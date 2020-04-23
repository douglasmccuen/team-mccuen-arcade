import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Mame from '../components/Mame';
import { openGame, closeGame } from '../actions/rom';
import refreshConfig from '../actions/config';
import {
  isWindowMuted as getIsWindowMuted, muteWindow, isOSMuted as getIsOSMuted, muteOS, setOSVolumeLevel,
  getOSVolumeLevel
} from '../actions/window'
import { appStateType } from '../reducers/types';

function mapStateToProps(state: appStateType) {
  const { isOpen } = state.rom
  const { roms=[] } = state.config
  const { isOSMuted, isWindowMuted } = state.win

  // sort the games by name
  const games = [].concat(roms)
  games.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  return { isOpen, games, isOSMuted, isWindowMuted }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({
    openGame, closeGame, refreshConfig, muteWindow,
    getIsWindowMuted, getIsOSMuted,
    muteOS, setOSVolumeLevel, getOSVolumeLevel, onSleep: () => {}
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mame);
