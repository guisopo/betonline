import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios';
import { GridItem } from '../GridItem';

export const GameList = () => {
  // = = = = = = = = = = = = =
  // States
  const [gamesList, setGamesList] = useState([])

  // = = = = = = = = = = = = =
  // Retrieve List of Games
  const fetchGamesList = () => { 
    axios
      .get('https://gist.githubusercontent.com/vbence86/83da491ff9830ad19ac6fa0a10162fc1/raw/d543204847b3d9896f0ce15d244bb89160fe0f86/games.json')
      .then(response => {
        if(response.status !== 200) {
          console.log(`There was an error fetching the games data ${response.status} ${response.statusText}`);
          return null;
        }
        const fetchedGameList = response.data.CategoryGames[0].Popular;
        setGamesList(fetchedGameList);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // = = = = = = = = = = = = =
  // Hooks
  // Fetch games when component mounts
  useEffect(fetchGamesList, []);

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
