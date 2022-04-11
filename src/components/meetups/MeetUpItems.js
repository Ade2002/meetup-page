import React, { useContext } from 'react'
import Images from '../../components/img/Images'
import Favoritescontext from '../../store/favorites-context'
const MeetUpItems = (props) => {
    const favoritesCtx = useContext(Favoritescontext)
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    const toggleFavoritesStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        }else{
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }

    return (
        <li className='items'>
            <img className='image' src={Images.me} alt='me' />
            <span className='content' >
                <h4>Name: <small>Ademola Sikiru</small></h4>
                <h4>Location: <address>Kemta Housing estate idi aba</address></h4>
                <h4>Description: <small>Light skinned, rich, software developer</small></h4>
                <button className='actions' onClick={toggleFavoritesStatusHandler}> {itemIsFavorite?'Delete friend' : 'ADD friend'}</button>
            </span >
        </li>
    )
}

export default MeetUpItems;
