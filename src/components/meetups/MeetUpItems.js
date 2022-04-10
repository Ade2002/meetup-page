import React from 'react'
import Card from '../ui/Card'
const MeetUpItems = (props) => {
    return (
        <li className='items'>
            <Card>

            <img className='image' src={props.photo} alt={props.title} />
            <span className='content'>
                <h2>{props.title}</h2>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </span>
            <div className='actions'>
                <button>Add to favorites</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetUpItems