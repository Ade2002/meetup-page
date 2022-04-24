import React, { useContext } from 'react'
import Favoritescontext from '../../store/favorites-context'
const MeetUpItems = (props) => {
    const favoritesCtx = useContext(Favoritescontext)
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    const toggleFavoritesStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }
    /* let reell = itemIsFavorite(props.id) */

    return (
        <li className='items'>
            <img className='image' src={props.photo} alt={props.title} />
            <span className='content'>
                <h2>Name: {props.title}</h2>
                <address>Location: {props.address}</address>
                <p>Description: {props.description}</p>
            </span>
            <div className='actions'>
                <button onClick={toggleFavoritesStatusHandler}> {/* {reell ? 'Delete friend' : 'ADD friend'} */}ADD friend</button>
            </div>
        </li>
    )
}

export default MeetUpItems;
