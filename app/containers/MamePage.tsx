import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Mame from '../components/Mame';
import { openGame, closeGame } from '../actions/rom';
import refreshConfig from '../actions/config';
import { romStateType } from '../reducers/types';

function mapStateToProps(state: romStateType) {
  const { isOpen } = state.rom
  const { roms=[] } = state.config
  return { isOpen, games: roms };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ openGame, closeGame, refreshConfig }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mame);
