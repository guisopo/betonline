import React from 'react'
import './index.scss'
import gameCover from '../../images/game-pic.png'

export const GridItem = ({ game }) => {

  return (
    <div className="grid-item">
      <img className="grid-item__image" src={gameCover} alt="game cover" />
      <h3 className="grid-item__title">GameName</h3>
    </div>
  )
}
