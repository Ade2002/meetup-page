import React, { createContext, useState } from 'react';

const Favoritescontext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { }
})
export const FavoritesContextprovider = (props) => {
    const [userFavorites, setUserFavorites] = useState([])
    const addFavoriteHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup)
        })
    }
    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites((prevUserFavorite) => {
            return prevUserFavorite.filter(meetup => meetup.Id !== meetupId)
        })
    }
    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetup.Id === meetupId)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }
    return (
        <Favoritescontext.Provider value={context}>
            {props.children}
        </Favoritescontext.Provider>
    )
}
export default Favoritescontext;