import React from 'react'
import Images from '../../components/img/Images'
const MeetUpItems = (props) => {
    return (
        <li className='items'>
            <img className='image' src={Images.me} alt='me' />
            <span className='content' >
                <h4>Name: <small>Ademola Sikiru</small></h4>
                <h4>Location: <address>Kemta Housing estate idi aba</address></h4>
                <h4>Description: <small>Light skinned, rich, software developer</small></h4>
                <button className='actions'> Addd To favorite</button>
            </span >
        </li>
    )
}

export default MeetUpItems;
