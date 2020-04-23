/* eslint react/prop-types: off */
/* eslint react/jsx-closing-bracket-location: off */

import React, { RefObject } from 'react'
import Carousel from './carousel'
import Banner from './banner'

type Props = {
  games: []
  openGame: () => void
  closeGame: () => void
  refreshConfig: () => void
  isWindowMuted: boolean
  getIsWindowMuted: () => void
  muteWindow: () => void
  isOSMuted: boolean
  getIsOSMuted: () => void
  muteOS: () => void
  setOSVolumeLevel: () => void
  getOSVolumeLevel: () => void
  isOpen: boolean
};

interface MameType {
  carousel: RefObject<unknown>
}

class Mame extends React.Component<Props> implements MameType {

  carousel = React.createRef()

  constructor(props: Props) {
    super(props)
    this.focusCarouselInput = this.focusCarouselInput.bind(this)
  }

  componentDidMount() {
    const {
      refreshConfig, getIsWindowMuted, getIsOSMuted, getOSVolumeLevel
    } = this.props
    this.focusCarouselInput()
    refreshConfig()
    getIsWindowMuted()
    getIsOSMuted()
    getOSVolumeLevel()
  }

  componentDidUpdate() {
    this.focusCarouselInput()
  }

  focusCarouselInput() {
    this.carousel.current.focus()
  }

  render() {
    const { openGame, isOpen, games, isOSMuted, muteOS, setOSVolumeLevel } = this.props
    return (games.length>0) ? (
      <>
        <Banner
          onSleep={()=>{}}
          onMute={() => {muteOS(!isOSMuted)}}
          onVolUp={()=>{setOSVolumeLevel(80)}}
          onVolDown={()=>{setOSVolumeLevel(20)}}
          name="COVID 2020" />
        <Carousel
          openGame={openGame}
          paused={isOpen}
          games={games}
          ref={this.carousel} />
      </>
    ) : <div ref={this.carousel}>loading...</div>
  }
}

export default Mame
