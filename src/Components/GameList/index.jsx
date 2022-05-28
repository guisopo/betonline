import React, { useEffect, useState } from 'react'
import './index.scss'
import { GridItem } from '../GridItem'
import gameService from '../../services/games'

export const GameList = () => {
  // = = = = = = = = = = = = =
  // States
  const [gamesList, setGamesList] = useState([])


  // = = = = = = = = = = = = =
  // Hooks
  // Call service to fetch all games when component mounts
  const initialHook = () => {
    gameService
      .fetchAllGames()
      .then(fetchedGames => setGamesList(fetchedGames))
      .catch(({ message }) => {
        console.error(message)
      })
  }
  
  useEffect(initialHook, []);

  return (
    <section className="main-section">

      <div className="section__header">
        <h2 className="section__title">Popular Games</h2>
      </div>

      <div className="section__grid">
        {
          gamesList?.map(game => <GridItem key={game.GameID} game={game}/>)
        }
      </div>

    </section>
  )
}
