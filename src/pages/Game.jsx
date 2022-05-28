import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

export const Game = ({ gameTitle }) => {
  return (
    <>
      <Header/>
        <h1>{gameTitle}</h1>
      <Footer/>
    </>
  );
}
