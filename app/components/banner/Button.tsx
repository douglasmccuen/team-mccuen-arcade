/* eslint jsx-a11y/control-has-associated-label: off */
/* eslint react/jsx-closing-tag-location: off */
/* eslint react/jsx-one-expression-per-line: off */
/* eslint react/jsx-closing-bracket-location: off */
import React from 'react'

type Props = {
  icon: string
  handleClick: () => void
  disabled?: boolean
}

const Button = ({ handleClick, icon, disabled }: Props) => (
  <button
    type="button"
    disabled={disabled}
    onClick={handleClick}><i className={`fa ${icon} fa-3x`} /></button>
)

export default Button
