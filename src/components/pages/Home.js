import React, { useState, useEffect } from 'react'
import MeetUPList from '../meetups/MeetUpList'
import { DUMMYDATA } from '../../layouts/DummyData' 
import Images from '../../components/img/Images'
const Home = () => {
     const [updating, setIsUpdating] = useState(true)
    const [updated, setIsUpdated] = useState([])

    useEffect(() => {
        document.title = 'Meetup Page'
        setIsUpdating(true)
        fetch('https://meetups-7ed71-default-rtdb.firebaseio.com/meetuptable.json').then(res => {
            res.json()
        }).then(data => {
            const meetups = []

            for (const key in data) {
                const meetUp = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetUp)
            }
            setIsUpdating(false)
            setIsUpdated(meetups)
        })
    }, [])
    if (updating) {
        return <section>
            <p>Loading...</p>
        </section>
    } 
    return (<>
        <h1>All meet ups</h1>
        <ul>
            <MeetUPList meetups={updated} /> 
        </ul>

    </>
    )
}

export default Home;