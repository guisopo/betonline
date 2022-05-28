/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const fetchAllGames = () => (
  axios
    .get('https://gist.githubusercontent.com/vbence86/83da491ff9830ad19ac6fa0a10162fc1/raw/d543204847b3d9896f0ce15d244bb89160fe0f86/games.json')
    .then(response => {
      if(response.status !== 200) {
        console.log(`There was an error fetching the games data ${response.status} ${response.statusText}`);
        return null
      }
      const fetchedGameList = response.data.CategoryGames[0].Popular;
      return fetchedGameList
    })
    .catch(({ message }) => {
      console.error(message)
    })
)

export default { fetchAllGames }