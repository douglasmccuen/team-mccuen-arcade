/* eslint react/prop-types: off */
/* eslint react/jsx-closing-bracket-location: off */

import React from 'react'
import Carousel from './carousel'
import Banner from './banner'

type Props = {
  games: []
  openGame: () => void
  closeGame: () => void
  refreshConfig: () => void
  isWindowMuted: () => void
  muteWindow: () => void
  isOSMuted: () => void
  muteOS: () => void
  setOSVolumeLevel: () => void
  getOSVolumeLevel: () => void
  isOpen: boolean
};

interface MameType {
  carousel: React.Ref
  props: Props
}

class Mame extends React.Component implements MameType {

  carousel = React.createRef()

  constructor(props: Props) {
    super(props)
    this.focusCarouselInput = this.focusCarouselInput.bind(this)
  }

  componentDidMount() {
    const {
      refreshConfig, isWindowMuted, isOSMuted, getOSVolumeLevel
    } = this.props
    this.focusCarouselInput()
    refreshConfig()
    isWindowMuted()
    isOSMuted()
    getOSVolumeLevel()
  }

  componentDidUpdate() {
    this.focusCarouselInput()
  }

  focusCarouselInput() {
    this.carousel.current.focus()
  }

  render() {
    const { openGame, isOpen, games } = this.props
    return (games.length>0) ? (
      <>
        <Banner name="COVID 2020" />
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
