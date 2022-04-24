import React, { useState, useEffect } from 'react'
import MeetUPList from '../meetups/MeetUpList'
import { DUMMYDATA } from '../../layouts/DummyData'
const Home = () => {
    const [updating, setIsUpdating] = useState(true)
    /* const [updated, setIsUpdated] = useState([]) */
    useEffect(() => {
        document.title = 'Meetup Page'
        setIsUpdating(true)
        /* fetch('https://meetups-7ed71-default-rtdb.firebaseio.com/meetuptable.json')
            .then(res => res.json()).then(data => {
                console.log(data)
                setIsUpdating(false)
                const meetups = []
                for (const key in data) {
                    const meetUp = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetUp)
                }
                setIsUpdated(meetups)
            }) */
    }, [])

    return (
        <>
            <h1>All Hookups</h1>
            {updating ? <p>Loading</p> : ""}
            <ul>
                <MeetUPList meetups={DUMMYDATA} />
            </ul>

        </>
    )
}

export default Home;