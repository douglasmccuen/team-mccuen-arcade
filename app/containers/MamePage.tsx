import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Mame from '../components/Mame';
import { openGame, closeGame } from '../actions/rom';
import { romStateType } from '../reducers/types';

function mapStateToProps(state: romStateType) {
  const { isOpen } = state.rom;
  return { isOpen };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ openGame, closeGame }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mame);
