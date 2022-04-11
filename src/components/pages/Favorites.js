import React, { useContext } from 'react'
import Favoritescontext from '../../store/favorites-context'
import MeetUPList from '../meetups/MeetUpList'
import { Link } from 'react-router-dom'
const Favorites = () => {
  const favoritesCtx = useContext(Favoritescontext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no friends <Link to={'/'}>click here to add friend</Link> </p>
  } else {
    content = <MeetUPList meetups={favoritesCtx.favorites} />
  }
  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  )
}

export default Favorites