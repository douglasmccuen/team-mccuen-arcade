/* eslint react/prop-types: off */
/* eslint react/jsx-closing-bracket-location: off */

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Mame.css'
import routes from '../constants/routes.json'
import Carousel from './carousel'

type Props = {
  games: array
  openGame: () => void
  closeGame: () => void
  refreshConfig: () => void
  isOpen: bool
};

class Mame extends React.Component {

  constructor(props: Props) {
    super(props)
    this.carousel = React.createRef()
    this.focusCarouselInput = this.focusCarouselInput.bind(this)
  }

  componentDidMount() {
    const { refreshConfig } = this.props
    this.focusCarouselInput()
    refreshConfig()
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
      <div className={styles.Content}>
        <div className={styles.Carousel}>
          <Carousel
            openGame={openGame}
            paused={isOpen}
            games={games}
            ref={this.carousel} />
        </div>
        <div className={styles.Link}>
          <Link to={routes.TODO}>Todo List</Link>
        </div>
      </div>
    ) : <div ref={this.carousel}>loading...</div>
  }
}

export default Mame
