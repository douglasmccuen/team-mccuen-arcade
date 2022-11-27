/* eslint react/prop-types: off */
/* eslint react/jsx-closing-bracket-location: off */

import React, { RefObject } from 'react'
import Carousel from './carousel'
import Banner from './banner'
import { RomConfig } from '../reducers/types'

type Props = {
  games: RomConfig[]
  openGame: (g:string) => void
  closeGame: () => void
  refreshConfig: () => void
  isWindowMuted: boolean
  getIsWindowMuted: () => void
  muteWindow: () => void
  isOSMuted: boolean
  getIsOSMuted: () => void
  muteOS: (b:boolean) => void
  setOSVolumeLevel: (n:number) => void
  getOSVolumeLevel: () => void
  onSleep: () => void
  isOpen: boolean
  volumeLevel: number
};

interface MameType {
  carousel: RefObject<HTMLDivElement>
}

class Mame extends React.Component<Props> implements MameType {

  carousel = React.createRef<HTMLDivElement>()

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
    const node = this.carousel.current
    if (node) {
      node.focus()
    }
  }

  render() {
    const {
      openGame, isOpen, games, isOSMuted, muteOS, setOSVolumeLevel, onSleep,
      volumeLevel
    } = this.props
    const volumeInc = 5
    return (games.length>0) ? (
      <>
        <Banner
          onSleep={onSleep}
          onMute={() => {muteOS(!isOSMuted)}}
          onVolUp={()=>{setOSVolumeLevel(volumeLevel+volumeInc)}}
          onVolDown={()=>{setOSVolumeLevel(volumeLevel-volumeInc)}}
          volumeLevel={volumeLevel}
          isMuted={isOSMuted}
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
