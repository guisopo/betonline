import React from 'react'
import './index.scss'
import gameCover from '../../images/game-pic.png'
import { Link } from "react-router-dom";


export const GridItem = ({ game }) => {

  return (
    <div className="grid-item">
      <Link className="grid-item__link" to={`/game/${game.GameName.replace(/\s+/g, '-').toLowerCase()}`}>
        
        <div className="grid-item__image-wrapper">
          <img className="grid-item__image" src={gameCover} alt="game cover" />
          {/* <img className="grid-item__image" src={game.FeaturedImageUrl} alt="game cover" /> */}
        </div>
        
        <h3 className="grid-item__title">{game.GameName}</h3>

      </Link>
    </div>
  )
}
