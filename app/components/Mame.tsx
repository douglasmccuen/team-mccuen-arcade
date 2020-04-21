/* eslint react/prop-types: off */

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Mame.css'
import routes from '../constants/routes.json'
import Carousel from './carousel'

type Props = {
  openGame: () => void
  closeGame: () => void
  isOpen: bool
};

class Mame extends React.Component {

  constructor(props: Props) {
    super(props)
    this.carousel = React.createRef()
    this.focusCarouselInput = this.focusCarouselInput.bind(this)
  }

  componentDidUpdate() {
    this.focusCarouselInput()
  }

  focusCarouselInput() {
    this.carousel.current.focus()
  }

  render() {
    const { openGame, isOpen } = this.props
    return (
      <div className={styles.Content}>
        <div className={styles.Carousel}>
          <Carousel openGame={openGame} paused={isOpen} ref={this.carousel} />
        </div>
        <div className={styles.Link}>
          <Link to={routes.TODO}>Todo List</Link>
        </div>
      </div>
    )
  }
}

export default Mame
