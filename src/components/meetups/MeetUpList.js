import React from 'react'
import MeetUpItems from './MeetUpItems'
const MeetUPList = (props) => {
    return (
        <ul className='list'>
            {
                props.meetups.map((meetup) => <MeetUpItems
                    key={meetup.id}
                    id={meetup.id}
                    photo={meetup.photo}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description.length>45?`${meetup.description.slice(0, 17)}...` : meetup.description}
                />)
            }
        </ul>
    )
}

export default MeetUPList