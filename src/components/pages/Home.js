import React, { useState, useEffect } from 'react'
/* import MeetUPList from '../meetups/MeetUpList'
import { DUMMYDATA } from '../../layouts/DummyData' */
import Images from '../../components/img/Images'
const Home = () => {
/*     const [updating, setIsUpdating] = useState(true)
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
    } */
    return (<>
        <h1>All meet ups</h1>
        <ul>
            {/* <MeetUPList meetups={updated} /> */}
            <span className='content'>
                <img className='image' src={Images.me} alt='me' />
                <h4>Name: <small>Ademola Sikiru</small></h4>
                <h4>Location: <address>Kemta Housing estate idi aba</address></h4>
                <h4>Description: <small>Light skinned, rich, software developer</small></h4>
                <p>20</p>
                <button className='actions'> Addd To favorite</button>
            </span>
        </ul>

    </>
    )
}

export default Home;