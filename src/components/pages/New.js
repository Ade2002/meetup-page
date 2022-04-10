import React from 'react'
import {useNavigate} from 'react-router-dom'
import NewMeetupForm from '../meetups/NewMeetupForm'
const New = () => {
    const history = useNavigate()
    const addMeetup = (meetupData) => {
        const url = 'https://meetups-7ed71-default-rtdb.firebaseio.com/meetuptable.json'
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                history('/')
            })
    }
    return (
        <section>
            <h1>Add new meet up</h1>
            <NewMeetupForm onAddMeetup={addMeetup}/>
        </section>
    )
}

export default New