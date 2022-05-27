import React from 'react'
import './index.scss'
import gameCover from '../../images/game-pic.png'

export const GridItem = ({ game }) => {

  return (
    <div className="grid-item">
      <div className="grid-item__image-wrapper">
        <img className="grid-item__image" src={gameCover} alt="game cover" />
      </div>
      <h3 className="grid-item__title">{game.GameName}</h3>
    </div>
  )
}
