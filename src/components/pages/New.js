import React from 'react'
import NewMeetupForm from '../meetups/NewMeetupForm'
const New = () => {
    const addMeetup = (meetupData) => {
        fetch('https://meetups-7ed71-default-rtdb.firebaseio.com/meetuptable.json')
    }
    return (
        <section>
            <h1>Add new meet up</h1>
            <NewMeetupForm onAddMeetup={addMeetup}/>
        </section>
    )
}

export default New